<?php

	class CommanderController extends CI_Controller{
		public function __construct(){
			parent::__construct();
			$this->load->model("CommanderModel");
		}
		public function index(){
			$this->load->view("clients");
		}
		public function getCommander(){
			$this->CommanderModel->getCommander();
		}
		public function postCommander(){
			$this->CommanderModel->postCommander(($this->post)[0]);
		}
		public function deleteCommander($id){
			// var_dump($id);
			$this->CommanderModel->deleteCommander($id);
		}
		public function putCommander($id){
			$this->CommanderModel->putCommander($id, ($this->post)[0]);
		}
	}

?>
