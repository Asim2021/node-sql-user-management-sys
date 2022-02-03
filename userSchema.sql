CREATE TABLE `user_management_sys`.`user` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `first_name` VARCHAR(45) NOT NULL , 
    `last_name` VARCHAR(45) NOT NULL , 
    `email` VARCHAR(45) NOT NULL , 
    `phone` VARCHAR(45) NOT NULL , 
    `comments` TEXT NOT NULL , 
    `status` VARCHAR(10) NOT NULL DEFAULT 'active' , 
    PRIMARY KEY (`id`)) 
    ENGINE = InnoDB;

INSERT INTO `user` 
    (`id`, `first_name`, `last_name`, `email`, `phone`, `comments`, `status`)
     VALUES (NULL, 'Asim', 'Shah', 'asim.shah@gmail.com', '8130619988', 'This is a comment for Asim Shah.', 'active');

#//////////UFC FIGHTER DATA ///////////

INSERT INTO `user` 
(`id`, `first_name`,  `last_name`,    `email`,                 `phone`,         `comments`, `status`) VALUES
(NULL, 'Amanda',      'Nunes',        'anunes@ufc.com',        '012345 678910', '',          'active'),
(NULL, 'Alexander',   'Volkanovski',  'avolkanovski@ufc.com',  '012345 678911', '',          'active'),
(NULL, 'Khabib',      'Nurmagomedov', 'knurmagomedov@ufc.com', '012345 678912', '',          'active'),
(NULL, 'Kamaru',      'Usman',        'kusman@ufc.com',        '012345 678913', '',          'active'),
(NULL, 'Israel',      'Adesanya',     'iadesanya@ufc.com',     '012345 678914', '',          'active'),
(NULL, 'Henry',       'Cejudo',       'hcejudo@ufc.com',       '012345 678915', '',          'active'),
(NULL, 'Valentina',   'Shevchenko',   'vshevchenko@ufc.com',   '012345 678916', '',          'active'),
(NULL, 'Tyron',       'Woodley',      'twoodley@ufc.com',      '012345 678917', '',          'active'),
(NULL, 'Rose',        'Namajunas ',   'rnamajunas@ufc.com',    '012345 678918', '',          'active'),
(NULL, 'Tony',        'Ferguson ',    'tferguson@ufc.com',     '012345 678919', '',          'active'),
(NULL, 'Jorge',       'Masvidal ',    'jmasvidal@ufc.com',     '012345 678920', '',          'active'),
(NULL, 'Nate',        'Diaz ',        'ndiaz@ufc.com',         '012345 678921', '',          'active'),
(NULL, 'Conor',       'McGregor ',    'cmcGregor@ufc.com',     '012345 678922', '',          'active'),
(NULL, 'Cris',        'Cyborg ',      'ccyborg@ufc.com',       '012345 678923', '',          'active'),
(NULL, 'Tecia',       'Torres ',      'ttorres@ufc.com',       '012345 678924', '',          'active'),
(NULL, 'Ronda',       'Rousey ',      'rrousey@ufc.com',       '012345 678925', '',          'active'),
(NULL, 'Holly',       'Holm ',        'hholm@ufc.com',         '012345 678926', '',          'active'),
(NULL, 'Joanna',      'Jedrzejczyk ', 'jjedrzejczyk@ufc.com',  '012345 678927', '',          'active')