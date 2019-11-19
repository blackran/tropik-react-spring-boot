<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CategoriesModel extends CI_Model{
	public function postCategories($data){
		$sql = "insert into CATEGORIES (DescriptionCategorie) values ('{$data->DescriptionCategorie}')";
		if($this->db->query($sql)){
			$ret['message']="insertion reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="il y a une erreur";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function getCategories(){
		$this->load->database();
    $sql = "select * from CATEGORIES";
		// var_dump(json_encode($this->db->query($sql)->result()[0]));
    echo json_encode($this->db->query($sql)->result());
	}
	public function deleteCategories($id){
		$this->load->database();
		$sql = "delete from CATEGORIES where NumCategorie={$id}";
		if($this->db->query($sql)){
			$ret['message']="request reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="request refuse";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function putCategories($id, $data){
		$this->load->database();
		$sql = "update CATEGORIES set DescriptionCategorie='{$data->DescriptionCategorie}' where NumCategorie={$id}";
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
