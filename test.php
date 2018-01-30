<?php

class PgConnection extends \PDO {

    private $host = "127.0.0.1";
    private $driver = "pgsql";
    private $dbname = "gwa_dpr";

    public function __construct() {

        $dsn = $this->driver . ':host=' . $this->host . ';dbname=' . $this->dbname;
        try {
            parent::__construct($dsn, "szkolenie", "szkolenie");
            //  echo "Połaczono z bazą";
        } catch (PDOException $e) {
            //echo "Błąd połączenia z bazą!: " . $e->getMessage() . "<br/>";
            die();
        }
        $this->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
    }

}

$db = new PgConnection();

$sql = 'SELECT * from umowy where id=20';
$query = $db->prepare($sql);

$query->execute();

$response = array();
foreach ($query->fetchAll(\PDO::FETCH_ASSOC) as $row) {

    $obj = new stdClass();
    foreach ($row as $column => $value) {
        $obj->$column = $value;
    }
    $response[] = $obj;
    // header('Content-Type: application/json');
}

echo json_encode($response);
//var_dump( $array);
?>




