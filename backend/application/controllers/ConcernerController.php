<?php

	class ConcernerController extends CI_Controller{
		public function __construct(){
			parent::__construct();
			$this->load->model("ConcernerModel");
		}
		public function index(){
			$this->load->view("clients");
		}
		public function getConcerner(){
			$this->ConcernerModel->getConcerner();
		}
		public function postConcerner(){
			$this->ConcernerModel->postConcerner(($this->post)[0]);
		}
		public function deleteConcerner($id){
			// var_dump($id);
			$this->ConcernerModel->deleteConcerners($id);
		}
		public function putConcerner($id){
			$this->ConcernerModel->putConcerner($id, ($this->post)[0]);
		}
	}

?>
