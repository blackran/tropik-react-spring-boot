<?php

	class RepasController extends CI_Controller{
		public function __construct(){
			parent::__construct();
			$this->load->model("RepasModel");
		}
		public function index(){
			$this->load->view("clients");
		}
		public function getRepas(){
			$this->RepasModel->getRepas();
		}
		public function postRepas(){
			$this->RepasModel->postRepas(($this->post)[0]);
		}
		public function deleteRepas($id){
			// var_dump($id);
			$this->RepasModel->deleteRepas($id);
		}
		public function putRepas($id){
			$this->RepasModel->putRepas($id, ($this->post)[0]);
		}
	}

?>
