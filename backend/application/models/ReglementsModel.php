<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ReglementsModel extends CI_Model{
	public function postReglements($data){
		$this->load->database();
		$sql = "insert into REGLEMENTS (NumReglement, MontantReglement, EtatReglement, AnneeReglement) values ('{$data->NumReglement}','{$data->MontantReglement}','{$data->EtatReglement}','{$data->AnneeReglement}')";

		if($this->db->query($sql)){
			$ret['message']="insertion reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="il y a une erreur";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function getReglements(){
		$this->load->database();
    $sql = "select * from REGLEMENTS";
    echo json_encode($this->db->query($sql)->result());
	}
	public function deleteReglements($id){
		$this->load->database();
		$sql = "delete from REGLEMENTS where NumReglement={$id}";
		if($this->db->query($sql)){
			$ret['message']="request reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="request refuse";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function putReglements($id, $data){
		$this->load->database();
		$sql = "update REGLEMENTS set MontantReglement={$data->MontantReglement}, EtatReglement='{$data->EtatReglement}', AnneeReglement='{$data->AnneeReglement}' where NumReglement='{$id}'";
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
