<?php

	class ClientsController extends CI_Controller{
		public function __construct(){
			parent::__construct();
			$this->load->model("ClientsModel");
		}
		public function index(){
			$this->load->view("clients");
		}
		public function getClients(){
			$this->ClientsModel->getClients();
		}
		public function postClients(){
			$varDecode = $this->post;
			var_dump($varDecode);
			$this->ClientsModel->postClients(($this->post)[0]);
		}
		public function deleteClients($id){
			// var_dump($id);
			$this->ClientsModel->deleteClients($id);
		}
		public function putClients($id){
			var_dump($this->post);
			$this->ClientsModel->putClients($id, ($this->post)[0]);
		}
	}
?>
