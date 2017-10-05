/* custom function */
/* initial condition */
/* =============================================================================================== */
function resetAll(){
	resetForm();
}

function resetForm(){
	$("* input, * textarea").val('');
}

/* calculator and converter */
/* =============================================================================================== */
/* time converter */
function timeSince(date) {
	var seconds = Math.floor((new Date() - date) / 1000);
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	if (seconds < 5){
		return "baru saja";
	}else if (seconds < 60){
		return seconds + " detik yang lalu";
	}
	else if (seconds < 3600) {
		minutes = Math.floor(seconds/60)
		if(minutes > 1)
			return minutes + " menit yang lalu";
		else
			return "1 menit yang lalu";
	}
	else if (seconds < 86400) {
		hours = Math.floor(seconds/3600)
		if(hours > 1)
			return hours + " jam yang lalu";
		else
			return "1 jam yang lalu";
	}
	//2 days and no more
	else if (seconds < 172800) {
		days = Math.floor(seconds/86400)
		if(days > 1)
			return days + " hari yang lalu";
		else
			return "1 hari yang lalu";
	}
	else{

		//return new Date(time).toLocaleDateString();
		return date.getDate().toString() + " " + months[date.getMonth()] + ", " + date.getFullYear();
	}
}

function monthConvert(month){
	var result = "";
	switch(month){
		case 0: result = "Januari"; break;
		case 1: result = "Februari"; break;
		case 2: result = "Maret"; break;
		case 3: result = "April"; break;
		case 4: result = "Mei"; break;
		case 5: result = "Juni"; break;
		case 6: result = "Juli"; break;
		case 7: result = "Agustus"; break;
		case 8: result = "September"; break;
		case 9: result = "Oktober"; break;
		case 10: result = "November"; break;
		case 11: result = "Desember"; break;
	}
	
	return result;
}

/* form auto */
/* =============================================================================================== */
function isNumberKey(evt){
	$('input.number').keyup(function(){$(this).val($(this).val().replace(/[^\d]/,''));});
    var charCode = (evt.which) ? evt.which : evt.keyCode
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
}

function numberOnlyActivator(target){
	$(target).keypress(function (e) {
	    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
	        return false;
	    }
	});
}

function currencyFormatActivator(target){
	$(target).on('keyup', function(e){
		if ((e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) || $(this).val() == "") { return false; }
		else{
	    	var n = parseInt($(this).val().replace(/\D/g,''),10);
	    	$(this).val(n.toLocaleString());

	    	if($(this).attr('terbilang-name') != ""){
	    		$('[name=' + $(this).attr('terbilang-name') + ']').html( terbilang($(this).val().replace(/\D/g,'')).toUpperCase() );
	    	}
		}
	});

	$(target).keypress(function (e) {
	    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
	        return false;
	    }
	});
}

var daftarAngka=new Array("","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan");
function terbilang(nilai){
	var temp='';
	var hasilBagi,sisaBagi;
	//batas untuk ribuan
	var batas=3;
	//untuk menentukan ukuran array, jumlahnya sesuaikan dengan jumlah anggota dari array gradeNilai[]
	var maxBagian = 5;
	var gradeNilai=new Array("","ribu","juta","milyar","triliun");
	//cek apakah ada angka 0 didepan ==> 00098, harus diubah menjadi 98
	nilai = this.hapusNolDiDepan(nilai);
	var nilaiTemp = ubahStringKeArray(batas, maxBagian, nilai);
	//ubah menjadi bentuk terbilang
	var j = nilai.length;
	//menentukan batas array
	var banyakBagian = (j % batas) == 0 ? (j / batas) : Math.round(j / batas + 0.5);
	var h=0;
	    for(var i = banyakBagian - 1; i >=0; i-- ){
	        var nilaiSementara = parseInt(nilaiTemp[h]);
	        if (nilaiSementara == 1 && i == 1){ 
	            temp +="seribu ";
	            }
	        else {
	            temp +=this.ubahRatusanKeHuruf(nilaiTemp[h])+" ";
	// cek apakah string bernilai 000, maka jangan tambahkan gradeNilai[i]
	            if(nilaiTemp[h] != "000"){
	                temp += gradeNilai[i]+" ";
	                }
	            }
	        h++;
	        }
	return temp + " RUPIAH";
}

function ubahStringKeArray(batas, maxBagian,kata){
// maksimal 999 milyar
	var temp= new Array(maxBagian);
	var j = kata.length;
	//menentukan batas array
	var banyakBagian = (j % batas) == 0 ? (j / batas) : Math.round(j / batas + 0.5);
	    for(var i = banyakBagian - 1; i >= 0 ; i--){ 
	        var k = j - batas;
	        if(k < 0) k = 0;
	            temp[i]=kata.substring(k,j);
	        j = k ;
	        if (j == 0)
	        break;
	        }
	 return temp;
 }
 
function ubahRatusanKeHuruf(nilai){ 
	//maksimal 3 karakter 
	var batas = 2;
	//membagi string menjadi 2 bagian, misal 123 ==> 1 dan 23
	var maxBagian = 2;
	var temp = this.ubahStringKeArray(batas, maxBagian, nilai);
	var j = nilai.length;
	var hasil="";
	//menentukan batas array
	var banyakBagian = (j % batas) == 0 ? (j / batas) : Math.round(j / batas + 0.5);
	    for(var i = 0; i < banyakBagian ;i++){
	//cek string yang memiliki panjang lebih dari satu ==> belasan atau puluhan
	        if(temp[i].length > 1){
	//cek untuk yang bernilai belasan ==> angka pertama 1 dan angka kedua 0 - 9, seperti 11,16 dst
	            if(temp[i].charAt(0) == '1'){
	                if(temp[i].charAt(1) == '1') {
	                    hasil += "sebelas";
	                    }
	                else if(temp[i].charAt(1) == '0') {
	                    hasil += "sepuluh";
	                    }
	            else hasil += daftarAngka[temp[i].charAt(1) - '0']+ " belas ";
	                }
	 //cek untuk string dengan format angka  pertama 0 ==> 09,05 dst
	            else if(temp[i].charAt(0) == '0'){
	            hasil += daftarAngka[temp[i].charAt(1) - '0'] ;
	            }
	 //cek string dengan format selain angka pertama 0 atau 1
	            else 
	            hasil += daftarAngka[temp[i].charAt(0) - '0']+ " puluh " +daftarAngka[temp[i].charAt(1) - '0'] ;
	            }
	        else {
	//cek string yang memiliki panjang = 1 dan berada pada posisi ratusan
	            if(i == 0 && banyakBagian !=1){
	                if (temp[i].charAt(0) == '1') 
	                    hasil+=" seratus ";
	                else if (temp[i].charAt(0) == '0')
	                    hasil+=" ";
	                else hasil+= daftarAngka[parseInt(temp[i])]+" ratus ";
	            }
	//string dengan panjang satu dan tidak berada pada posisi ratusan ==> satuan
	            else hasil+= daftarAngka[parseInt(temp[i])];
	            }
	    }
	return hasil;
}

function hapusNolDiDepan(nilai){
	while(nilai.indexOf("0") == 0){
	    nilai = nilai.substring(1, nilai.length);
	    }
	return nilai;
}

function currencyFormatDE (num) {
    return num
       .toFixed(2) // always two decimal digits
       .replace(".", ",") // replace decimal point character with ,
       .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") // use . as a separator
}

function dateParse(){
	var dateStart	= new Date(Date.parse($("input[name=year-from]").val() + "/" + $("input[name=month-from]").val() + "/" + $("input[name=day-from]").val()));
}

function imgPreview(event, viewer, elem) {
	var file = elem.files[0];
	var imagefile = file.type;
	var match= ["image/jpeg","image/png","image/jpg","image/gif"];
	if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2]) || (imagefile==match[3])))
	{
		$('#' + viewer).attr('src','img/picture-default.png');
		$("#post-dialog .modal-body .alert").html("<strong>Peringatan!</strong> Format gambar tidak dikenal.");
		call_alert("post");
		return false;
	}
	else
	{
		var output = document.getElementById(viewer);
		output.src = URL.createObjectURL(event.target.files[0]);
	}
};


/* fecth array */
function lembagaFetchArray(data){
	var res = [[],[],[]];
	for(var loop=0; loop<data.length; loop++){
		res[1].push(data[loop].noreg);
		res[0].push(data[loop].nama);
		res[2].push(data[loop].caption);
	}
	
	return res;
}