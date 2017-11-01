-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 01 Nov 2017 pada 17.55
-- Versi Server: 5.6.21
-- PHP Version: 5.5.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tabah_dumb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `dplega_009_persyaratan`
--

CREATE TABLE IF NOT EXISTS `dplega_009_persyaratan` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `kodePersyaratan` char(5) NOT NULL,
  `noLegalitas` varchar(20) NOT NULL,
  `tanggalLegalitas` date NOT NULL,
  `urlFile` varchar(40) NOT NULL,
  `statusVerifikasi` char(1) NOT NULL COMMENT '0: sudah, 1: belum',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `dplega_009_persyaratan`
--

INSERT INTO `dplega_009_persyaratan` (`idData`, `noRegistrasi`, `kodePersyaratan`, `noLegalitas`, `tanggalLegalitas`, `urlFile`, `statusVerifikasi`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(1, '44330900001', '9', '1234', '2017-09-20', '44330900001_9_legalitas.jpg', '1', 'admin', '2017-09-20 00:28:15', 'admin', '2017-09-20 21:10:24'),
(2, '44330900001', '10', '909090', '2017-09-20', '44330900001_10_legalitas.jpg', '1', 'admin', '2017-09-20 21:15:12', 'admin', '2017-09-20 21:15:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `dplega_009_persyaratan_temp`
--

CREATE TABLE IF NOT EXISTS `dplega_009_persyaratan_temp` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `kodePersyaratan` char(5) NOT NULL,
  `noLegalitas` varchar(20) NOT NULL,
  `tanggalLegalitas` date NOT NULL,
  `urlFile` varchar(40) NOT NULL,
  `statusVerifikasi` char(1) NOT NULL COMMENT '0: sudah, 1: belum',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `dplega_012_verifikasi`
--

CREATE TABLE IF NOT EXISTS `dplega_012_verifikasi` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `kodeVerifikasi` int(11) NOT NULL,
  `status` char(1) NOT NULL DEFAULT '0' COMMENT '0: belum, 1: sudah, 2:ubah, 3: salah',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `dplega_012_verifikasi`
--

INSERT INTO `dplega_012_verifikasi` (`idData`, `noRegistrasi`, `kodeVerifikasi`, `status`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(1, '44330900001', 4, '1', 'admin', '2017-09-20 20:48:33', 'admin', '2017-09-20 21:14:14'),
(2, '44330900001', 5, '1', 'admin', '2017-09-20 20:48:54', 'admin', '2017-09-20 21:10:28');

-- --------------------------------------------------------

--
-- Struktur dari tabel `dplega_012_verifikasi_temp`
--

CREATE TABLE IF NOT EXISTS `dplega_012_verifikasi_temp` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `kodeVerifikasi` int(11) NOT NULL,
  `status` char(1) NOT NULL DEFAULT '0' COMMENT '0: belum, 1: sudah, 2:ubah, 3: salah',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `dplega_013_verifikasilogs`
--

CREATE TABLE IF NOT EXISTS `dplega_013_verifikasilogs` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `kodePersyaratan` int(11) NOT NULL,
  `catatan` varchar(255) NOT NULL,
  `statusBaca` char(1) NOT NULL DEFAULT '0',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `dplega_013_verifikasilogs_temp`
--

CREATE TABLE IF NOT EXISTS `dplega_013_verifikasilogs_temp` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `kode` int(11) NOT NULL,
  `type` char(1) NOT NULL COMMENT '0: legalitas, 1: lainnya',
  `catatan` varchar(255) NOT NULL,
  `statusBaca` char(1) NOT NULL DEFAULT '0',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `dplega_220_gruppersyaratan`
--

CREATE TABLE IF NOT EXISTS `dplega_220_gruppersyaratan` (
`kodeGrupVerifikasi` int(11) NOT NULL,
  `namaGrupVerifikasi` varchar(100) NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `dplega_220_gruppersyaratan`
--

INSERT INTO `dplega_220_gruppersyaratan` (`kodeGrupVerifikasi`, `namaGrupVerifikasi`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(7, 'Fisik', 'TESTSESSION', '2017-08-25 03:58:43', '', '0000-00-00 00:00:00'),
(8, 'KOBONG', 'TESTSESSION', '2017-08-25 03:58:54', '', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `dplega_221_persyaratan`
--

CREATE TABLE IF NOT EXISTS `dplega_221_persyaratan` (
`kodeVerifikasi` int(11) NOT NULL,
  `namaVerifikasi` varchar(100) NOT NULL,
  `kodeGrupVerifikasi` int(11) NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `dplega_221_persyaratan`
--

INSERT INTO `dplega_221_persyaratan` (`kodeVerifikasi`, `namaVerifikasi`, `kodeGrupVerifikasi`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(4, 'Copy bukti kepemilikan atau Penguasaan atas tanah', 7, 'TESTSESSION', '2017-08-25 03:59:49', '', '0000-00-00 00:00:00'),
(5, 'Copy ijin operasional dari kemenag kab/kota', 8, 'TESTSESSION', '2017-08-25 04:00:37', '', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `dplega_900_logactivities`
--

CREATE TABLE IF NOT EXISTS `dplega_900_logactivities` (
`idData` int(11) NOT NULL,
  `activity` text NOT NULL,
  `status` varchar(7) NOT NULL COMMENT 'SUCCESS/FAILED/PENDING',
  `message` text NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `dplega_900_logactivities_temp`
--

CREATE TABLE IF NOT EXISTS `dplega_900_logactivities_temp` (
`idData` int(11) NOT NULL,
  `activity` text NOT NULL,
  `status` varchar(7) NOT NULL COMMENT 'SUCCESS/FAILED/PENDING',
  `message` text NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `dplega_920_backuphistory`
--

CREATE TABLE IF NOT EXISTS `dplega_920_backuphistory` (
`idData` int(11) NOT NULL,
  `namaFile` varchar(100) NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `dplega_920_backuphistory`
--

INSERT INTO `dplega_920_backuphistory` (`idData`, `namaFile`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(1, 'dplega_dumb_2017-09-12 145909.db', 'admin', '2017-09-12 19:59:09', '', '0000-00-00 00:00:00'),
(2, 'dplega_dumb_2017-09-12 150257.db', 'admin', '2017-09-12 20:02:57', '', '0000-00-00 00:00:00'),
(3, 'dplega_dumb_2017-09-13 175743.db', 'admin', '2017-09-13 22:57:43', NULL, NULL),
(4, 'dplega_dumb_2017-09-19 203924.db', 'admin', '2017-09-20 01:39:24', NULL, NULL),
(5, 'dplega_dumb_2017-09-20 165724.db', 'admin', '2017-09-20 21:57:24', NULL, NULL),
(6, 'dplega_dumb_2017-09-21 115253.db', 'admin', '2017-09-21 16:52:53', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `dplega_921_restorehistory`
--

CREATE TABLE IF NOT EXISTS `dplega_921_restorehistory` (
`idData` int(11) NOT NULL,
  `namaFile` varchar(100) NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_000_proposalawal`
--

CREATE TABLE IF NOT EXISTS `tabah_000_proposalawal` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `tujuan` varchar(100) NOT NULL,
  `latarBelakang` text NOT NULL,
  `nominal` decimal(10,0) NOT NULL,
  `status` char(1) NOT NULL DEFAULT '0' COMMENT '0: aktif, 1: selesai, 2:dihapus',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tabah_000_proposalawal`
--

INSERT INTO `tabah_000_proposalawal` (`idData`, `noRegistrasi`, `tujuan`, `latarBelakang`, `nominal`, `status`, `createdBy`, `createdDate`, `changedBy`) VALUES
(1, '00037300001', 'qwe', 'ewrewr', '10000', '0', 'admin', '2017-10-03 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_001_persyaratanawal`
--

CREATE TABLE IF NOT EXISTS `tabah_001_persyaratanawal` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `kodePersyaratan` char(5) NOT NULL,
  `noLegalitas` varchar(20) NOT NULL,
  `tanggalLegalitas` date NOT NULL,
  `urlFile` varchar(40) NOT NULL,
  `statusVerifikasi` char(1) NOT NULL COMMENT '0: sudah, 1: belum',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tabah_001_persyaratanawal`
--

INSERT INTO `tabah_001_persyaratanawal` (`idData`, `noRegistrasi`, `kodePersyaratan`, `noLegalitas`, `tanggalLegalitas`, `urlFile`, `statusVerifikasi`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(1, '44330900001', '9', '1234', '2017-09-20', '44330900001_9_legalitas.jpg', '1', 'admin', '2017-09-20 00:28:15', 'admin', '2017-09-20 21:10:24'),
(2, '44330900001', '10', '909090', '2017-09-20', '44330900001_10_legalitas.jpg', '1', 'admin', '2017-09-20 21:15:12', 'admin', '2017-09-20 21:15:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_002_rabawal`
--

CREATE TABLE IF NOT EXISTS `tabah_002_rabawal` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `uraian` varchar(100) NOT NULL,
  `volume` int(11) NOT NULL,
  `satuan` varchar(100) NOT NULL,
  `hargaSatuan` decimal(10,0) NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_003_verifikasilogs`
--

CREATE TABLE IF NOT EXISTS `tabah_003_verifikasilogs` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `kodePersyaratan` int(11) NOT NULL,
  `catatan` varchar(255) NOT NULL,
  `statusBaca` char(1) NOT NULL DEFAULT '0',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_010_proposalpencairan`
--

CREATE TABLE IF NOT EXISTS `tabah_010_proposalpencairan` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `tujuan` varchar(100) NOT NULL,
  `latarBelakang` text NOT NULL,
  `nominal` decimal(10,0) NOT NULL,
  `status` char(1) NOT NULL DEFAULT '0' COMMENT '0: aktif, 1: selesai, 2:dihapus',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_011_rabpencairan`
--

CREATE TABLE IF NOT EXISTS `tabah_011_rabpencairan` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `uraian` varchar(100) NOT NULL,
  `volume` int(11) NOT NULL,
  `satuan` varchar(100) NOT NULL,
  `hargaSatuan` decimal(10,0) NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_012_persyaratanpencairan`
--

CREATE TABLE IF NOT EXISTS `tabah_012_persyaratanpencairan` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `kodePersyaratan` char(5) NOT NULL,
  `noLegalitas` varchar(20) NOT NULL,
  `tanggalLegalitas` date NOT NULL,
  `urlFile` varchar(40) NOT NULL,
  `statusVerifikasi` char(1) NOT NULL COMMENT '0: sudah, 1: belum',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tabah_012_persyaratanpencairan`
--

INSERT INTO `tabah_012_persyaratanpencairan` (`idData`, `noRegistrasi`, `kodePersyaratan`, `noLegalitas`, `tanggalLegalitas`, `urlFile`, `statusVerifikasi`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(1, '44330900001', '9', '1234', '2017-09-20', '44330900001_9_legalitas.jpg', '1', 'admin', '2017-09-20 00:28:15', 'admin', '2017-09-20 21:10:24'),
(2, '44330900001', '10', '909090', '2017-09-20', '44330900001_10_legalitas.jpg', '1', 'admin', '2017-09-20 21:15:12', 'admin', '2017-09-20 21:15:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_013_verifikasilogs`
--

CREATE TABLE IF NOT EXISTS `tabah_013_verifikasilogs` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `kodePersyaratan` int(11) NOT NULL,
  `catatan` varchar(255) NOT NULL,
  `statusBaca` char(1) NOT NULL DEFAULT '0',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_030_riwayat_proposalawal`
--

CREATE TABLE IF NOT EXISTS `tabah_030_riwayat_proposalawal` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `tujuan` varchar(100) NOT NULL,
  `latarBelakang` text NOT NULL,
  `nominal` decimal(10,0) NOT NULL,
  `status` char(1) NOT NULL DEFAULT '0' COMMENT '0: aktif, 1: selesai, 2:dihapus',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_031_riwayat_persyaratanawal`
--

CREATE TABLE IF NOT EXISTS `tabah_031_riwayat_persyaratanawal` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `kodePersyaratan` char(5) NOT NULL,
  `noLegalitas` varchar(20) NOT NULL,
  `tanggalLegalitas` date NOT NULL,
  `urlFile` varchar(40) NOT NULL,
  `statusVerifikasi` char(1) NOT NULL COMMENT '0: sudah, 1: belum',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tabah_031_riwayat_persyaratanawal`
--

INSERT INTO `tabah_031_riwayat_persyaratanawal` (`idData`, `noRegistrasi`, `kodePersyaratan`, `noLegalitas`, `tanggalLegalitas`, `urlFile`, `statusVerifikasi`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(1, '44330900001', '9', '1234', '2017-09-20', '44330900001_9_legalitas.jpg', '1', 'admin', '2017-09-20 00:28:15', 'admin', '2017-09-20 21:10:24'),
(2, '44330900001', '10', '909090', '2017-09-20', '44330900001_10_legalitas.jpg', '1', 'admin', '2017-09-20 21:15:12', 'admin', '2017-09-20 21:15:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_032_riwayat_rabawal`
--

CREATE TABLE IF NOT EXISTS `tabah_032_riwayat_rabawal` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `uraian` varchar(100) NOT NULL,
  `volume` int(11) NOT NULL,
  `satuan` varchar(100) NOT NULL,
  `hargaSatuan` decimal(10,0) NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_033_riwayat_verifikasilogs`
--

CREATE TABLE IF NOT EXISTS `tabah_033_riwayat_verifikasilogs` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `kodePersyaratan` int(11) NOT NULL,
  `catatan` varchar(255) NOT NULL,
  `statusBaca` char(1) NOT NULL DEFAULT '0',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_040_riwayat_proposalpencairan`
--

CREATE TABLE IF NOT EXISTS `tabah_040_riwayat_proposalpencairan` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `tujuan` varchar(100) NOT NULL,
  `latarBelakang` text NOT NULL,
  `nominal` decimal(10,0) NOT NULL,
  `status` char(1) NOT NULL DEFAULT '0' COMMENT '0: aktif, 1: selesai, 2:dihapus',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_041_riwayat_rabpencairan`
--

CREATE TABLE IF NOT EXISTS `tabah_041_riwayat_rabpencairan` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `uraian` varchar(100) NOT NULL,
  `volume` int(11) NOT NULL,
  `satuan` varchar(100) NOT NULL,
  `hargaSatuan` decimal(10,0) NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_042_riwayat_persyaratanpencairan`
--

CREATE TABLE IF NOT EXISTS `tabah_042_riwayat_persyaratanpencairan` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `kodePersyaratan` char(5) NOT NULL,
  `noLegalitas` varchar(20) NOT NULL,
  `tanggalLegalitas` date NOT NULL,
  `urlFile` varchar(40) NOT NULL,
  `statusVerifikasi` char(1) NOT NULL COMMENT '0: sudah, 1: belum',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tabah_042_riwayat_persyaratanpencairan`
--

INSERT INTO `tabah_042_riwayat_persyaratanpencairan` (`idData`, `noRegistrasi`, `kodePersyaratan`, `noLegalitas`, `tanggalLegalitas`, `urlFile`, `statusVerifikasi`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(1, '44330900001', '9', '1234', '2017-09-20', '44330900001_9_legalitas.jpg', '1', 'admin', '2017-09-20 00:28:15', 'admin', '2017-09-20 21:10:24'),
(2, '44330900001', '10', '909090', '2017-09-20', '44330900001_10_legalitas.jpg', '1', 'admin', '2017-09-20 21:15:12', 'admin', '2017-09-20 21:15:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_043_riwayat_verifikasilogs`
--

CREATE TABLE IF NOT EXISTS `tabah_043_riwayat_verifikasilogs` (
`idData` int(11) NOT NULL,
  `noRegistrasi` char(11) NOT NULL,
  `kodePersyaratan` int(11) NOT NULL,
  `catatan` varchar(255) NOT NULL,
  `statusBaca` char(1) NOT NULL DEFAULT '0',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_100_timwilayah`
--

CREATE TABLE IF NOT EXISTS `tabah_100_timwilayah` (
`idData` int(11) NOT NULL,
  `namaTim` varchar(100) NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tabah_100_timwilayah`
--

INSERT INTO `tabah_100_timwilayah` (`idData`, `namaTim`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(1, 'Wilayah 1', 'admin', '2017-09-29 19:07:43', 'admin', '2017-09-29 19:30:09'),
(9, 'Wilayah 4', 'admin', '2017-09-29 19:19:54', NULL, NULL),
(10, 'Wilayah 3', 'admin', '2017-09-29 19:21:43', NULL, NULL),
(11, 'Wilayah 2', 'admin', '2017-09-29 19:31:13', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_101_anggotatimwilayah`
--

CREATE TABLE IF NOT EXISTS `tabah_101_anggotatimwilayah` (
`idData` int(11) NOT NULL,
  `idTimWilayah` int(11) NOT NULL,
  `idAnggota` int(11) NOT NULL,
  `posisi` int(11) NOT NULL DEFAULT '0' COMMENT '0: anggota, 1: ketua',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tabah_101_anggotatimwilayah`
--

INSERT INTO `tabah_101_anggotatimwilayah` (`idData`, `idTimWilayah`, `idAnggota`, `posisi`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(1, 11, 1, 0, 'SESSION_TEST', '2017-10-29 11:00:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_201_persyaratan`
--

CREATE TABLE IF NOT EXISTS `tabah_201_persyaratan` (
`kodePersyaratan` int(11) NOT NULL,
  `kodeBentukLembaga` int(11) NOT NULL,
  `namaPersyaratan` varchar(100) NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `changedBy` varchar(20) DEFAULT NULL,
  `changerdDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tabah_201_persyaratan`
--

INSERT INTO `tabah_201_persyaratan` (`kodePersyaratan`, `kodeBentukLembaga`, `namaPersyaratan`, `createdBy`, `createdDate`, `changedBy`, `changerdDate`) VALUES
(3, 3, 'asdasdasdasd', 'TESTSESSION', '2017-06-12 00:30:15', '', '0000-00-00 00:00:00'),
(4, 2, 'ini legalitas', 'TESTSESSION', '2017-08-16 12:04:20', '', '0000-00-00 00:00:00'),
(5, 2, 'ini juga legalitas', 'TESTSESSION', '2017-08-16 12:04:39', '', '0000-00-00 00:00:00'),
(6, 8, 'c', 'TESTSESSION', '2017-08-20 10:48:09', '', '0000-00-00 00:00:00'),
(9, 9, 'Akta Notaris', 'TESTSESSION', '2017-08-24 22:26:16', '', '0000-00-00 00:00:00'),
(10, 9, 'SK Kemenhumkam', 'TESTSESSION', '2017-08-24 22:26:30', '', '0000-00-00 00:00:00'),
(11, 13, 'Ijin Operasional', 'TESTSESSION', '2017-08-28 17:18:21', '', '0000-00-00 00:00:00'),
(12, 11, 'Ijin Operasional', 'TESTSESSION', '2017-08-29 09:34:25', '', '0000-00-00 00:00:00'),
(13, 12, 'Ijin Operasional', 'TESTSESSION', '2017-08-29 09:35:29', '', '0000-00-00 00:00:00'),
(14, 17, 'Surat Keterangan Terdaftar', 'TESTSESSION', '2017-08-29 09:36:35', '', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_230_berita`
--

CREATE TABLE IF NOT EXISTS `tabah_230_berita` (
`idData` int(11) NOT NULL,
  `judulBerita` varchar(100) NOT NULL,
  `deskripsi` text NOT NULL,
  `urlGambar` varchar(40) DEFAULT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tabah_230_berita`
--

INSERT INTO `tabah_230_berita` (`idData`, `judulBerita`, `deskripsi`, `urlGambar`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(1, 'PEMBUKAAN PERMOHONAN BANTUAN HIBAH - JABAR ', 'Dengan ini kami menyampaikan kepada lembaga keagamaan seluruh  Jawa Barat dapat melakukan permohonan untuk bantuan hibah, lengkapi persyaratan dan legalitas anda dengan teliti.', NULL, '', '2017-10-26 16:08:01', NULL, NULL),
(2, 'PENUTUPAN ANGGARAN PERUBAHAN', 'Kami mengumumkan bahwa Permohonan Anggaran Perubahan sudah ditutup. untuk informasi lebih lanjut dapat menghubungi kami di skretariatan.', NULL, '', '2017-10-26 16:09:08', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_901_notifications`
--

CREATE TABLE IF NOT EXISTS `tabah_901_notifications` (
`idData` int(11) NOT NULL,
  `deskripsi` text NOT NULL,
  `waktu` datetime NOT NULL,
  `targetUser` varchar(20) NOT NULL,
  `statusBaca` char(1) NOT NULL DEFAULT '0' COMMENT '0: belum, 1: sudah',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tabah_901_notifications`
--

INSERT INTO `tabah_901_notifications` (`idData`, `deskripsi`, `waktu`, `targetUser`, `statusBaca`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(1, 'Data jalasutra telah diubah oleh PAH', '2017-08-29 14:14:40', '', '1', 'pah', '2017-08-29 14:14:40', '', '0000-00-00 00:00:00'),
(2, 'Data jalasutra telah diubah oleh Administrator', '2017-08-31 16:02:41', '', '1', 'admin', '2017-08-31 16:02:41', '', '0000-00-00 00:00:00'),
(3, 'Data Test lagi telah diubah oleh Administrator', '2017-09-07 23:03:35', '', '1', 'admin', '2017-09-07 23:03:35', '', '0000-00-00 00:00:00'),
(4, 'Data dengan no registrasi 00030200001 telah ditransfer oleh Administrator', '2017-09-16 20:37:41', '', '1', 'admin', '2017-09-16 20:37:41', NULL, NULL),
(5, 'Legalitas (Akta Notaris) c telah ditambahkan oleh Administrator', '2017-09-20 00:28:15', '', '1', 'admin', '2017-09-20 00:28:15', NULL, NULL),
(6, 'Legalitas c telah diverifikasi oleh Administrator', '2017-09-20 20:04:18', '44330900001', '1', 'admin', '2017-09-20 20:04:18', NULL, NULL),
(7, 'Legalitas c telah diverifikasi oleh Administrator', '2017-09-20 20:05:46', '44330900001', '1', 'admin', '2017-09-20 20:05:46', NULL, NULL),
(8, 'Legalitas c telah diverifikasi oleh Administrator', '2017-09-20 20:13:27', '44330900001', '1', 'admin', '2017-09-20 20:13:27', NULL, NULL),
(9, 'Legalitas c telah diverifikasi oleh Administrator', '2017-09-20 20:14:43', '44330900001', '1', 'admin', '2017-09-20 20:14:43', NULL, NULL),
(10, 'Legalitas c telah diverifikasi oleh Administrator', '2017-09-20 20:16:14', '44330900001', '1', 'admin', '2017-09-20 20:16:14', NULL, NULL),
(11, 'Legalitas c telah diverifikasi oleh Administrator', '2017-09-20 20:18:28', '44330900001', '1', 'admin', '2017-09-20 20:18:28', NULL, NULL),
(12, 'Copy bukti kepemilikan atau Penguasaan atas tanah milik c telah diverifikasi olehAdministrator', '2017-09-20 20:44:48', '44330900001', '1', 'admin', '2017-09-20 20:44:48', NULL, NULL),
(13, 'Copy bukti kepemilikan atau Penguasaan atas tanah milik c telah diverifikasi olehAdministrator', '2017-09-20 20:45:31', '44330900001', '1', 'admin', '2017-09-20 20:45:31', NULL, NULL),
(14, 'Copy bukti kepemilikan atau Penguasaan atas tanah milik c telah diverifikasi olehAdministrator', '2017-09-20 20:46:30', '44330900001', '1', 'admin', '2017-09-20 20:46:30', NULL, NULL),
(15, 'Copy ijin operasional dari kemenag kab/kota milik c telah diverifikasi olehAdministrator', '2017-09-20 20:46:44', '44330900001', '1', 'admin', '2017-09-20 20:46:44', NULL, NULL),
(16, 'Copy bukti kepemilikan atau Penguasaan atas tanah milik c telah diverifikasi olehAdministrator', '2017-09-20 20:48:00', '44330900001', '1', 'admin', '2017-09-20 20:48:00', NULL, NULL),
(17, 'Copy bukti kepemilikan atau Penguasaan atas tanah milik c telah diverifikasi olehAdministrator', '2017-09-20 20:48:33', '44330900001', '1', 'admin', '2017-09-20 20:48:33', NULL, NULL),
(18, 'Copy ijin operasional dari kemenag kab/kota milik c telah diverifikasi olehAdministrator', '2017-09-20 20:48:54', '44330900001', '1', 'admin', '2017-09-20 20:48:54', NULL, NULL),
(19, 'Copy bukti kepemilikan atau Penguasaan atas tanah milik c tidak disetujui olehAdministrator', '2017-09-20 20:49:00', '44330900001', '1', 'admin', '2017-09-20 20:49:00', NULL, NULL),
(20, 'Copy ijin operasional dari kemenag kab/kota milik c tidak disetujui olehAdministrator', '2017-09-20 20:49:08', '44330900001', '1', 'admin', '2017-09-20 20:49:08', NULL, NULL),
(21, 'Legalitas : Akta Notaris milik c telah diverifikasi oleh Administrator', '2017-09-20 20:58:57', '44330900001', '1', 'admin', '2017-09-20 20:58:57', NULL, NULL),
(22, 'Copy bukti kepemilikan atau Penguasaan atas tanah milik c telah diverifikasi olehAdministrator', '2017-09-20 21:01:35', '44330900001', '1', 'admin', '2017-09-20 21:01:35', NULL, NULL),
(23, 'Copy bukti kepemilikan atau Penguasaan atas tanah milik c tidak disetujui olehAdministrator', '2017-09-20 21:02:41', '44330900001', '1', 'admin', '2017-09-20 21:02:41', NULL, NULL),
(24, 'Legalitas : Akta Notaris milik c tidak disetujui oleh Administrator', '2017-09-20 21:02:52', '44330900001', '1', 'admin', '2017-09-20 21:02:52', NULL, NULL),
(25, 'Copy bukti kepemilikan atau Penguasaan atas tanah milik c telah diverifikasi olehAdministrator', '2017-09-20 21:02:55', '44330900001', '1', 'admin', '2017-09-20 21:02:55', NULL, NULL),
(26, 'Copy ijin operasional dari kemenag kab/kota milik c telah diverifikasi olehAdministrator', '2017-09-20 21:02:57', '44330900001', '1', 'admin', '2017-09-20 21:02:57', NULL, NULL),
(27, 'Copy ijin operasional dari kemenag kab/kota milik c tidak disetujui olehAdministrator', '2017-09-20 21:02:58', '44330900001', '1', 'admin', '2017-09-20 21:02:58', NULL, NULL),
(28, 'Copy bukti kepemilikan atau Penguasaan atas tanah milik c tidak disetujui olehAdministrator', '2017-09-20 21:08:52', '44330900001', '1', 'admin', '2017-09-20 21:08:52', NULL, NULL),
(29, 'Legalitas : Akta Notaris milik c telah diverifikasi oleh Administrator', '2017-09-20 21:09:27', '44330900001', '1', 'admin', '2017-09-20 21:09:27', NULL, NULL),
(30, 'Legalitas : Akta Notaris milik c tidak disetujui oleh Administrator', '2017-09-20 21:09:35', '44330900001', '1', 'admin', '2017-09-20 21:09:35', NULL, NULL),
(31, 'Copy bukti kepemilikan atau Penguasaan atas tanah milik c telah diverifikasi olehAdministrator', '2017-09-20 21:09:45', '44330900001', '1', 'admin', '2017-09-20 21:09:45', NULL, NULL),
(32, 'Copy bukti kepemilikan atau Penguasaan atas tanah milik c tidak disetujui olehAdministrator', '2017-09-20 21:10:19', '44330900001', '1', 'admin', '2017-09-20 21:10:19', NULL, NULL),
(33, 'Legalitas : Akta Notaris milik c telah diverifikasi oleh Administrator', '2017-09-20 21:10:24', '44330900001', '1', 'admin', '2017-09-20 21:10:24', NULL, NULL),
(34, 'Copy ijin operasional dari kemenag kab/kota milik c telah diverifikasi olehAdministrator', '2017-09-20 21:10:28', '44330900001', '1', 'admin', '2017-09-20 21:10:28', NULL, NULL),
(35, 'Copy bukti kepemilikan atau Penguasaan atas tanah milik c telah diverifikasi olehAdministrator', '2017-09-20 21:14:14', '44330900001', '1', 'admin', '2017-09-20 21:14:14', NULL, NULL),
(36, 'Legalitas (SK Kemenhumkam) c telah ditambahkan oleh Administrator', '2017-09-20 21:15:12', '44330900001', '1', 'admin', '2017-09-20 21:15:12', NULL, NULL),
(37, 'Legalitas : SK Kemenhumkam milik c telah diverifikasi oleh Administrator', '2017-09-20 21:15:46', '44330900001', '1', 'admin', '2017-09-20 21:15:46', NULL, NULL),
(38, 'Data Syncard Tech. telah diubah oleh Syncard Tech.', '2017-09-21 16:29:05', '55051177773', '0', '55051177773syncardt', '2017-09-21 16:29:05', NULL, NULL),
(39, 'Data banyak telah diubah oleh Administrator', '2017-09-21 19:48:35', '55051177772', '1', 'admin', '2017-09-21 19:48:35', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_910_anggota`
--

CREATE TABLE IF NOT EXISTS `tabah_910_anggota` (
`idData` int(11) NOT NULL,
  `noRegistrasi` varchar(20) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `jabatan` varchar(100) DEFAULT NULL,
  `alamat` varchar(100) DEFAULT NULL,
  `noRt` varchar(3) DEFAULT NULL,
  `noRw` varchar(3) DEFAULT NULL,
  `kodeKelurahan` int(11) DEFAULT NULL,
  `kodeKecamatan` int(11) DEFAULT NULL,
  `kodeWilayah` int(11) DEFAULT NULL,
  `kodeProvinsi` int(11) DEFAULT NULL,
  `noTelp` varchar(16) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `urlGambar` varchar(40) DEFAULT NULL,
  `userLevel` int(11) NOT NULL,
  `lingkupArea` char(1) NOT NULL,
  `idBatasArea` int(11) NOT NULL,
  `statusActive` int(11) NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tabah_910_anggota`
--

INSERT INTO `tabah_910_anggota` (`idData`, `noRegistrasi`, `nama`, `jabatan`, `alamat`, `noRt`, `noRw`, `kodeKelurahan`, `kodeKecamatan`, `kodeWilayah`, `kodeProvinsi`, `noTelp`, `email`, `username`, `password`, `urlGambar`, `userLevel`, `lingkupArea`, `idBatasArea`, `statusActive`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(0, '', 'Administrator', '', '\r\n', '', '', 3, 1, 2, 1, '-', 'admin@tabah.com', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin_avatar.jpg', 7, '', 0, 1, 'TESTSESSION', '2017-08-28 16:08:25', 'admin', '2017-09-11 18:44:03'),
(1, '', 'Cecep Rohendi', 'Verifikatur', '', NULL, NULL, NULL, NULL, NULL, NULL, '', 'cecep@tabah.com', 'cecep', 'aff738ac6681f847310d38af54327734', NULL, 2, '', 0, 1, 'SESSION_TEST', '2017-10-29 12:42:21', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_911_anggotaaccess`
--

CREATE TABLE IF NOT EXISTS `tabah_911_anggotaaccess` (
`idData` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `idApps` int(11) NOT NULL,
  `module` varchar(100) NOT NULL,
  `lihat` char(1) NOT NULL DEFAULT '0' COMMENT '0: non aktif; 1: aktif',
  `tambah` char(1) NOT NULL DEFAULT '0' COMMENT '0: non aktif; 1: aktif',
  `ubah` char(1) NOT NULL DEFAULT '0' COMMENT '0: non aktif; 1: aktif',
  `hapus` char(1) NOT NULL DEFAULT '0' COMMENT '0: non aktif; 1: aktif',
  `statusAktif` int(11) NOT NULL DEFAULT '1',
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tabah_911_anggotaaccess`
--

INSERT INTO `tabah_911_anggotaaccess` (`idData`, `username`, `idApps`, `module`, `lihat`, `tambah`, `ubah`, `hapus`, `statusAktif`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(1, 'admin', 1, 'kelembagaan', '1', '1', '1', '1', 1, 'TESTSESSION', '2017-08-28 16:08:25', '', '0000-00-00 00:00:00'),
(2, 'admin', 1, 'lingkupArea', '1', '1', '1', '1', 1, 'TESTSESSION', '2017-08-28 16:08:25', '', '0000-00-00 00:00:00'),
(3, 'admin', 1, 'pengaturanKelembagaan', '1', '1', '1', '1', 1, 'TESTSESSION', '2017-08-28 16:08:25', '', '0000-00-00 00:00:00'),
(4, 'admin', 1, 'pengaturanVerifikasi', '1', '1', '1', '1', 1, 'TESTSESSION', '2017-08-28 16:08:25', '', '0000-00-00 00:00:00'),
(5, 'admin', 1, 'berita', '1', '1', '1', '1', 1, 'TESTSESSION', '2017-08-28 16:08:25', '', '0000-00-00 00:00:00'),
(6, 'admin', 1, 'konfigurasi', '1', '1', '1', '1', 1, 'TESTSESSION', '2017-08-28 16:08:25', '', '0000-00-00 00:00:00'),
(7, 'admin', 1, 'verifikasi', '1', '1', '1', '1', 1, 'TESTSESSION', '2017-09-21 00:01:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_912_apps`
--

CREATE TABLE IF NOT EXISTS `tabah_912_apps` (
`idData` int(11) NOT NULL,
  `idApps` varchar(4) NOT NULL,
  `appsName` varchar(100) NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tabah_912_apps`
--

INSERT INTO `tabah_912_apps` (`idData`, `idApps`, `appsName`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(1, 'TBH', 'Akses ke tabah 2.0', 'SESSION TEST', '2017-08-25 03:06:12', '', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_920_backuphistory`
--

CREATE TABLE IF NOT EXISTS `tabah_920_backuphistory` (
`idData` int(11) NOT NULL,
  `namaFile` varchar(100) NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tabah_920_backuphistory`
--

INSERT INTO `tabah_920_backuphistory` (`idData`, `namaFile`, `createdBy`, `createdDate`, `changedBy`, `changedDate`) VALUES
(1, 'tabah_dumb_2017-09-12 145909.db', 'admin', '2017-09-12 19:59:09', '', '0000-00-00 00:00:00'),
(2, 'tabah_dumb_2017-09-12 150257.db', 'admin', '2017-09-12 20:02:57', '', '0000-00-00 00:00:00'),
(3, 'tabah_dumb_2017-09-13 175743.db', 'admin', '2017-09-13 22:57:43', NULL, NULL),
(4, 'tabah_dumb_2017-09-19 203924.db', 'admin', '2017-09-20 01:39:24', NULL, NULL),
(5, 'tabah_dumb_2017-09-20 165724.db', 'admin', '2017-09-20 21:57:24', NULL, NULL),
(6, 'tabah_dumb_2017-09-21 115253.db', 'admin', '2017-09-21 16:52:53', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tabah_921_restorehistory`
--

CREATE TABLE IF NOT EXISTS `tabah_921_restorehistory` (
`idData` int(11) NOT NULL,
  `namaFile` varchar(100) NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `createdDate` datetime NOT NULL,
  `changedBy` varchar(20) DEFAULT NULL,
  `changedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dplega_009_persyaratan`
--
ALTER TABLE `dplega_009_persyaratan`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `dplega_009_persyaratan_temp`
--
ALTER TABLE `dplega_009_persyaratan_temp`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `dplega_012_verifikasi`
--
ALTER TABLE `dplega_012_verifikasi`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `dplega_012_verifikasi_temp`
--
ALTER TABLE `dplega_012_verifikasi_temp`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `dplega_013_verifikasilogs`
--
ALTER TABLE `dplega_013_verifikasilogs`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `dplega_013_verifikasilogs_temp`
--
ALTER TABLE `dplega_013_verifikasilogs_temp`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `dplega_220_gruppersyaratan`
--
ALTER TABLE `dplega_220_gruppersyaratan`
 ADD PRIMARY KEY (`kodeGrupVerifikasi`);

--
-- Indexes for table `dplega_221_persyaratan`
--
ALTER TABLE `dplega_221_persyaratan`
 ADD PRIMARY KEY (`kodeVerifikasi`), ADD KEY `kodeGrupVerifikasi` (`kodeGrupVerifikasi`);

--
-- Indexes for table `dplega_900_logactivities`
--
ALTER TABLE `dplega_900_logactivities`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `dplega_900_logactivities_temp`
--
ALTER TABLE `dplega_900_logactivities_temp`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `dplega_920_backuphistory`
--
ALTER TABLE `dplega_920_backuphistory`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `dplega_921_restorehistory`
--
ALTER TABLE `dplega_921_restorehistory`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_000_proposalawal`
--
ALTER TABLE `tabah_000_proposalawal`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_001_persyaratanawal`
--
ALTER TABLE `tabah_001_persyaratanawal`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_002_rabawal`
--
ALTER TABLE `tabah_002_rabawal`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_003_verifikasilogs`
--
ALTER TABLE `tabah_003_verifikasilogs`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_010_proposalpencairan`
--
ALTER TABLE `tabah_010_proposalpencairan`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_011_rabpencairan`
--
ALTER TABLE `tabah_011_rabpencairan`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_012_persyaratanpencairan`
--
ALTER TABLE `tabah_012_persyaratanpencairan`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_013_verifikasilogs`
--
ALTER TABLE `tabah_013_verifikasilogs`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_030_riwayat_proposalawal`
--
ALTER TABLE `tabah_030_riwayat_proposalawal`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_031_riwayat_persyaratanawal`
--
ALTER TABLE `tabah_031_riwayat_persyaratanawal`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_032_riwayat_rabawal`
--
ALTER TABLE `tabah_032_riwayat_rabawal`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_033_riwayat_verifikasilogs`
--
ALTER TABLE `tabah_033_riwayat_verifikasilogs`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_040_riwayat_proposalpencairan`
--
ALTER TABLE `tabah_040_riwayat_proposalpencairan`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_041_riwayat_rabpencairan`
--
ALTER TABLE `tabah_041_riwayat_rabpencairan`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_042_riwayat_persyaratanpencairan`
--
ALTER TABLE `tabah_042_riwayat_persyaratanpencairan`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_043_riwayat_verifikasilogs`
--
ALTER TABLE `tabah_043_riwayat_verifikasilogs`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_100_timwilayah`
--
ALTER TABLE `tabah_100_timwilayah`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_101_anggotatimwilayah`
--
ALTER TABLE `tabah_101_anggotatimwilayah`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_201_persyaratan`
--
ALTER TABLE `tabah_201_persyaratan`
 ADD PRIMARY KEY (`kodePersyaratan`);

--
-- Indexes for table `tabah_230_berita`
--
ALTER TABLE `tabah_230_berita`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_901_notifications`
--
ALTER TABLE `tabah_901_notifications`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_910_anggota`
--
ALTER TABLE `tabah_910_anggota`
 ADD PRIMARY KEY (`idData`), ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `tabah_911_anggotaaccess`
--
ALTER TABLE `tabah_911_anggotaaccess`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_912_apps`
--
ALTER TABLE `tabah_912_apps`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_920_backuphistory`
--
ALTER TABLE `tabah_920_backuphistory`
 ADD PRIMARY KEY (`idData`);

--
-- Indexes for table `tabah_921_restorehistory`
--
ALTER TABLE `tabah_921_restorehistory`
 ADD PRIMARY KEY (`idData`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dplega_009_persyaratan`
--
ALTER TABLE `dplega_009_persyaratan`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `dplega_009_persyaratan_temp`
--
ALTER TABLE `dplega_009_persyaratan_temp`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `dplega_012_verifikasi`
--
ALTER TABLE `dplega_012_verifikasi`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `dplega_012_verifikasi_temp`
--
ALTER TABLE `dplega_012_verifikasi_temp`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `dplega_013_verifikasilogs`
--
ALTER TABLE `dplega_013_verifikasilogs`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `dplega_013_verifikasilogs_temp`
--
ALTER TABLE `dplega_013_verifikasilogs_temp`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `dplega_220_gruppersyaratan`
--
ALTER TABLE `dplega_220_gruppersyaratan`
MODIFY `kodeGrupVerifikasi` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `dplega_221_persyaratan`
--
ALTER TABLE `dplega_221_persyaratan`
MODIFY `kodeVerifikasi` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `dplega_900_logactivities`
--
ALTER TABLE `dplega_900_logactivities`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `dplega_900_logactivities_temp`
--
ALTER TABLE `dplega_900_logactivities_temp`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `dplega_920_backuphistory`
--
ALTER TABLE `dplega_920_backuphistory`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `dplega_921_restorehistory`
--
ALTER TABLE `dplega_921_restorehistory`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tabah_000_proposalawal`
--
ALTER TABLE `tabah_000_proposalawal`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tabah_001_persyaratanawal`
--
ALTER TABLE `tabah_001_persyaratanawal`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tabah_002_rabawal`
--
ALTER TABLE `tabah_002_rabawal`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tabah_003_verifikasilogs`
--
ALTER TABLE `tabah_003_verifikasilogs`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tabah_010_proposalpencairan`
--
ALTER TABLE `tabah_010_proposalpencairan`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tabah_011_rabpencairan`
--
ALTER TABLE `tabah_011_rabpencairan`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tabah_012_persyaratanpencairan`
--
ALTER TABLE `tabah_012_persyaratanpencairan`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tabah_013_verifikasilogs`
--
ALTER TABLE `tabah_013_verifikasilogs`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tabah_030_riwayat_proposalawal`
--
ALTER TABLE `tabah_030_riwayat_proposalawal`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tabah_031_riwayat_persyaratanawal`
--
ALTER TABLE `tabah_031_riwayat_persyaratanawal`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tabah_032_riwayat_rabawal`
--
ALTER TABLE `tabah_032_riwayat_rabawal`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tabah_033_riwayat_verifikasilogs`
--
ALTER TABLE `tabah_033_riwayat_verifikasilogs`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tabah_040_riwayat_proposalpencairan`
--
ALTER TABLE `tabah_040_riwayat_proposalpencairan`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tabah_041_riwayat_rabpencairan`
--
ALTER TABLE `tabah_041_riwayat_rabpencairan`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tabah_042_riwayat_persyaratanpencairan`
--
ALTER TABLE `tabah_042_riwayat_persyaratanpencairan`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tabah_043_riwayat_verifikasilogs`
--
ALTER TABLE `tabah_043_riwayat_verifikasilogs`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tabah_100_timwilayah`
--
ALTER TABLE `tabah_100_timwilayah`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `tabah_101_anggotatimwilayah`
--
ALTER TABLE `tabah_101_anggotatimwilayah`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tabah_201_persyaratan`
--
ALTER TABLE `tabah_201_persyaratan`
MODIFY `kodePersyaratan` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `tabah_230_berita`
--
ALTER TABLE `tabah_230_berita`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tabah_901_notifications`
--
ALTER TABLE `tabah_901_notifications`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT for table `tabah_910_anggota`
--
ALTER TABLE `tabah_910_anggota`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tabah_911_anggotaaccess`
--
ALTER TABLE `tabah_911_anggotaaccess`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `tabah_912_apps`
--
ALTER TABLE `tabah_912_apps`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tabah_920_backuphistory`
--
ALTER TABLE `tabah_920_backuphistory`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `tabah_921_restorehistory`
--
ALTER TABLE `tabah_921_restorehistory`
MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
