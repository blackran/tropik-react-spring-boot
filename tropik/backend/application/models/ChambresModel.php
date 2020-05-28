<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ChambresModel extends CI_Model{
	public function postChambres($data){
		$this->load->database();
		$sql = "insert into CHAMBRES (NomChambre, TelChambre, EtageChambre, ChauffeauChambre, PrixChambre, NumCategorie, NumType, ImageChambre) values ('{$data->NomChambre}','{$data->TelChambre}','{$data->EtageChambre}','{$data->ChauffeauChambre}','{$data->PrixChambre}','{$data->NumCategorie}','{$data->NumType}','{$data->ImageChambre}')";
		var_dump($sql);
		if($this->db->query($sql)){
			$ret['message']="insertion reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="il y a une erreur";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function getChambres(){
		$this->load->database();
    $sql = "select * from CHAMBRES";
		$stocks = $this->db->query($sql)->result();

		// foreach($stocks as $key=>$value){
		// 	$value->ImageChambre = base64_encode($value->ImageChambre);
		// }

		return $this->output
          ->set_header('Content-Type: application/json; charset=utf-8')
          ->set_output(json_encode($stocks));
	}
	public function deleteChambres($id){
		$this->load->database();
		$sql = "delete from CHAMBRES where NomChambre='{$id}'";
		if($this->db->query($sql)){
			$ret['message']="request reusi";
			$ret['bool']=true;
		}else{
			$ret['message']="request refuse";
			$ret['bool']=false;
		}
		echo json_encode($ret);
	}
	public function putChambres($id, $data){
		$this->load->database();
		$sql = "update CHAMBRES set TelChambre='{$data->TelChambre}', EtageChambre='{$data->EtageChambre}', ChauffeauChambre='{$data->ChauffeauChambre}', PrixChambre={$data->PrixChambre}, 	NumCategorie={$data->NumCategorie}, NumType={$data->NumType}, ImageChambre='{$data->ImageChambre}' where NomChambre='{$data->NomChambre}'";
		var_dump($sql);
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
