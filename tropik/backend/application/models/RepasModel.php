<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class RepasModel extends CI_Model{
	public function postRepas($data){
		$sql = "insert into REPAS (NomRepas, CategorieRepas, PrixRepas) values ('{$data->NomRepas}','{$data->CategorieRepas}','{$data->PrixRepas}')";

		if($this->db->query($sql)){
			$ret['message']="insertion reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="il y a une erreur";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function getRepas(){
		$this->load->database();
    $sql = "select * from REPAS";
    echo json_encode($this->db->query($sql)->result());
	}
	public function deleteRepas($id){
		$this->load->database();
		$sql = "delete from REPAS where NumRepas={$id}";
		if($this->db->query($sql)){
			$ret['message']="request reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="request refuse";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function putRepas($id, $data){
		$this->load->database();
		$sql = "update REPAS set NomRepas='{$data->NomRepas}', CategorieRepas='{$data->CategorieRepas}', PrixRepas={$data->PrixRepas} where NumRepas={$id}";
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
