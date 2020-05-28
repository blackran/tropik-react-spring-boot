<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ReservationModel extends CI_Model{
	public function postReservation($data){
		$this->load->database();
		$sql = "insert into RESERVER (NumReservation, DateDebutReservation, DateFinReservation, NbJourReservation, ConditionReservation, NumClient, NumReglement) values ('{$data->NumReservation}','{$data->DateDebutReservation}','{$data->DateFinReservation}',{$data->NbJourReservation},'{$data->ConditionReservation}','{$data->NumClient}','{$data->NumReglement}')";

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
	public function getReservation(){
		$this->load->database();
    $sql = "select * from RESERVER";
    echo json_encode($this->db->query($sql)->result());
	}
	public function deleteReservation($id){
		$this->load->database();
		$sql = "delete from RESERVER where NumReservation={$id}";
		if($this->db->query($sql)){
			$ret['message']="request reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="request refuse";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function putReservation($id, $data){
		$this->load->database();
		$sql = "update RESERVER set DateDebutReservation='{$data->DateDebutReservation}', DateFinReservation='{$data->DateFinReservation}', NbJourReservation={$data->NbJourReservation}, ConditionReservation='{$data->ConditionReservation}', NumClient={$data->NumClient}, NumReglement='{$data->NumReglement}' where 	NumReservation={$id}";
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
