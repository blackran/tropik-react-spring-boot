<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class TypeModel extends CI_Model{
	public function postType($data){
		$this->load->database();
		$sql = "insert into TYPES (NomType, DescriptionType, ImagesType) values ('{$data->NomType}','{$data->DescriptionType}','{$data->ImagesType}')";
		var_dump($sql);
		if($this->db->query($sql)){
			$ret['message']="insertion reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="il y a une erreur";
			$ret['bool']=false;
		}
		echo json_encode($ret, true);
	}
	public function getType(){
		$this->load->database();
    $sql = "select * from TYPES";
    // var_dump($this->db->query($sql)->result());
		$spots = $this->db->query($sql)->result();

		foreach($spots as $key=>$value){
			$value->ImagesType = base64_encode($value->ImagesType);
		}
		// var_dump($spots);

		return $this->output
          ->set_header('Content-Type: application/json; charset=utf-8')
          ->set_output(json_encode($spots));
	}
	public function deleteType($id){
		$this->load->database();
		$sql = "delete from TYPES where NumType={$id}";
		if($this->db->query($sql)){
			$ret['message']="request reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="request refuse";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function putType($id, $data){
		$this->load->database();
		$sql = "update TYPES set NomType='{$data->NomType}', DescriptionType='{$data->DescriptionType}' where NumType={$id}";
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
