<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ClientsModel extends CI_Model{
	public function postClients($data){
		$this->load->database();
		var_dump($data);
		$sql = "insert into CLIENTS (NumClient, NomClient, AddressClient, CpClient, PaysClient, TelClient, EmailClient, AnneeCreClient) values ('{$data->NumClient}','{$data->NomClient}','{$data->AddressClient}','{$data->CpClient}','{$data->PaysClient}','{$data->TelClient}','{$data->EmailClient}','{$data->AnneeCreClient}')";

		if($this->db->query($sql)){
			$ret['message']="insertion reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="il y a une erreur";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function getClients(){
		$this->load->database();
    $sql = "select * from CLIENTS";
		// var_dump(json_encode($this->db->query($sql)->result()[0]));
    // echo json_encode($this->db->query($sql)->result());
		return $this->output
          ->set_header('Content-Type: application/json; charset=utf-8')
          ->set_output(json_encode($this->db->query($sql)->result()));
	}
	public function deleteClients($id){
		$this->load->database();
		$sql = "delete from CLIENTS where NumClient='{$id}'";
		if($this->db->query($sql)){
			$ret['message']="request reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="request refuse";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function putClients($id, $data){
		$this->load->database();
		$sql = "update CLIENTS set NomClient='{$data->NomClient}', AddressClient='{$data->AddressClient}', CpClient='{$data->CpClient}', PaysClient='{$data->PaysClient}', TelClient='{$data->TelClient}', EmailClient='{$data->EmailClient}', AnneeCreClient='{$data->AnneeCreClient}' where NumClient='{$id}'";
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
