<?php

	class ResponsablesController extends CI_Controller{
		public function __construct(){
			parent::__construct();
			$this->load->model("ResponsablesModel");
		}
		public function index(){
			$this->load->view("clients");
		}
		public function getResponsables(){
			$this->ResponsablesModel->getResponsables();
		}
		public function postResponsables(){
			$this->ResponsablesModel->postResponsables(($this->post)[0]);
		}
		public function deleteResponsables($id){
			// var_dump($id);
			$this->ResponsablesModel->deleteResponsables($id);
		}
		public function putResponsables($id){
			$this->ResponsablesModel->putResponsables($id, ($this->post)[0]);
		}
	}

?>
