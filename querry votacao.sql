create database votacaoDB;
use votacaoDB;

CREATE TABLE IF NOT EXISTS `votacao` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`titulo` text NOT NULL,
	`descricao` text NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `votos` (
	`votacao_id` int(11) NOT NULL,
    `usuario_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `usuarios` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
    `nome` text NOT NULL,
    `sobrenome` text NOT NULL,
	`genero` int NOT NULL,
	`cidade` text NOT NULL,
	`estado` text NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;