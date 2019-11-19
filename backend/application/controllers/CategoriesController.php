<?php

	class CategoriesController extends CI_Controller{
		public function __construct(){
			parent::__construct();
			$this->load->model("CategoriesModel");
		}
		public function index(){
			$this->load->view("clients");
		}
		public function getCategories(){
			$this->CategoriesModel->getCategories();
			//redirect('ClientsController');
		}
		public function postCategories(){
			$this->CategoriesModel->postCategories(($this->post)[0];
		}
		public function deleteCategories($id){
			// var_dump($id);
			$this->CategoriesModel->deleteCategories($id);
		}
		public function putCategories($id){
			$this->CategoriesModel->putCategories($id, ($this->post)[0]);
		}
	}

?>
