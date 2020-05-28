<?php

	class ChambresController extends CI_Controller{
		public function __construct(){
			parent::__construct();
			$this->load->model("ChambresModel");
		}
		public function index(){
			$this->load->view("clients");
		}
		public function getChambres(){
			$this->ChambresModel->getChambres();
		}
		public function postChambres(){
			// var_dump(($this->post)[0]->TelChambre);
			$this->ChambresModel->postChambres(($this->post)[0]);
		}
		public function deleteChambres($id){
			$this->ChambresModel->deleteChambres($id);
		}
		public function putChambres($id){
			$this->ChambresModel->putChambres($id, ($this->post)[0]);
		}
	}

?>
