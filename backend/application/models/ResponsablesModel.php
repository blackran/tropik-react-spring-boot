<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ResponsablesModel extends CI_Model{
	public function postResponsables($data){
		$this->load->database();
		$sql = "insert into RESPONSABLES (NomResponsable, PseudoResponsable, PasswordResponsable, PrenomResponsable, AddressResponsable, TelResponsable, DroitResponsable, ImageUrlResponsable) values ('{$data->NomResponsable}','{$data->PseudoResponsable}','{$data->PasswordResponsable}','{$data->PrenomResponsable}','{$data->AddressResponsable}','{$data->TelResponsable}','{$data->DroitResponsable}','{$data->ImageUrlResponsable}')";

		if($this->db->query($sql)){
			$ret['message']="insertion reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="il y a une erreur";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function getResponsables(){
		$this->load->database();
    $sql = "select * from RESPONSABLES";
    echo json_encode($this->db->query($sql)->result());
	}
	public function deleteResponsables($id){
		$this->load->database();
		$sql = "delete from RESPONSABLES where NumResponsable={$id}";
		if($this->db->query($sql)){
			$ret['message']="request reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="request refuse";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function putResponsables($id, $data){
		$this->load->database();
		$sql = "update RESPONSABLES set NomResponsable='{$data->NomResponsable}', PseudoResponsable='{$data->PseudoResponsable}', PasswordResponsable='{$data->PasswordResponsable}', PrenomResponsable='{$data->PrenomResponsable}', AddressResponsable='{$data->AddressResponsable}', TelResponsable='{$data->TelResponsable}', DroitResponsable='{$data->DroitResponsable}', ImageUrlResponsable='{$data->ImageUrlResponsable}' where NumResponsable={$id}";
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
