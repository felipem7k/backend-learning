<?php

use Felipem7k\PhpPdo\Infrastructure\Persistence\ConnectionCreator;
use Felipem7k\PhpPdo\Infrastructure\Repository\PdoStudentRepository;

require_once 'vendor/autoload.php';

$pdo = ConnectionCreator::createConnection();
$repository = new PdoStudentRepository($pdo);

$studentList = $repository->allStudents();

var_dump($studentList);