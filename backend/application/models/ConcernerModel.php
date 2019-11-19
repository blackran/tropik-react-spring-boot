<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ConcernerModel extends CI_Model{
	public function postConcerner($data){
		$this->load->database();
		$sql = "insert into CONCERNER (NumReservation, NomChambre) values ('{$data->NumReservation}','{$data->NomChambre}')";
		// var_dump($sql);
		if($this->db->query($sql)){
			$ret['message']="insertion reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="il y a une erreur";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function getConcerner(){
		$this->load->database();
    $sql = "select * from CONCERNER";
    echo json_encode($this->db->query($sql)->result());
	}
	public function deleteConcerner($id1, $id2){
		$this->load->database();
		$sql = "delete from CONCERNER where NumReservation={$id1} && NumReservation={$id2}";
		if($this->db->query($sql)){
			$ret['message']="request reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="request refuse";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function putConcerner($id1, $id2, $data){
		$this->load->database();
		$sql = "update CONCERNER set NomChambre='{$data->NomClient}', NumReservation='{$data->NumReservation}' where NumReservation={$id} && NomChambre={$id2}";
		if($this->db->query($sql)){
			$ret['message']="request reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="request refuse";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
}
