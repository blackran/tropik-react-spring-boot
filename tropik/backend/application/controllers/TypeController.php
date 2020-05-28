<?php

	class TypeController extends CI_Controller{
		public function __construct(){
			parent::__construct();
			$this->load->model("TypeModel");
		}
		public function index(){
			$this->load->view("clients");
		}
		public function getType(){
			$this->TypeModel->getType();
		}
		public function postType(){
			// $varDecode = $this->post;
			// var_dump($varDecode[0]);
			$this->TypeModel->postType(($this->post)[0]);
		}
		public function deleteType($id){
			// var_dump($id);
			$this->TypeModel->deleteType($id);
		}
		public function putType($id){
			$this->TypeModel->putType($id, ($this->post)[0]);
		}
	}

?>
