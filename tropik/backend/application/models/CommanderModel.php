<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CommanderModel extends CI_Model{
	public function postCommander($data){
		$sql = "insert into COMMANDER (	TarifCommander, DateCommander, NumClient, NumRepas) values ('{$data->TarifCommander}','{$data->DateCommander}','{$data->NumClient}','{$data->NumRepas}')";

		if($this->db->query($sql)){
			$ret['message']="insertion reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="il y a une erreur";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function getCommander(){
		$this->load->database();
    $sql = "select * from COMMANDER";
		// var_dump(json_encode($this->db->query($sql)->result()[0]));
    echo json_encode($this->db->query($sql)->result());
	}
	public function deleteCommander($id){
		$this->load->database();
		$sql = "delete from COMMANDER where NumCommander={$id}";
		if($this->db->query($sql)){
			$ret['message']="request reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="request refuse";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function putCommander($id, $data){
		$this->load->database();
		$sql = "update COMMANDER set TarifCommander={$data->TarifCommander}, DateCommander='{$data->DateCommander}', NumClient={$data->NumClient}, NumRepas={$data->NumRepas} where NumCommander={$id}";
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
