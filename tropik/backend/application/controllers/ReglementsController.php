<?php

	class ReglementsController extends CI_Controller{
		public function __construct(){
			parent::__construct();
			$this->load->model("ReglementsModel");
		}
		public function index(){
			$this->load->view("clients");
		}
		public function getReglements(){
			$this->ReglementsModel->getReglements();
		}
		public function postReglements(){
			$this->ReglementsModel->postReglements(($this->post)[0]);
		}
		public function deleteReglements($id){
			// var_dump($id);
			$this->ReglementsModel->deleteReglements($id);
		}
		public function putReglements($id){
			$this->ReglementsModel->putReglements($id, ($this->post)[0]);
		}
	}

?>
