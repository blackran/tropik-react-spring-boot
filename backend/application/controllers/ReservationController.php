<?php

	class ReservationController extends CI_Controller{
		public function __construct(){
			parent::__construct();
			$this->load->model("ReservationModel");
		}
		public function index(){
			$this->load->view("clients");
		}
		public function getReservation(){
			$this->ReservationModel->getReservation();
		}
		public function postReservation(){
			var_dump(($this->post)[0]);
			$this->ReservationModel->postReservation(($this->post)[0]);
		}
		public function deleteReservation($id){
			// var_dump($id);
			$this->ReservationModel->deleteReservation($id);
		}
		public function putReservation($id){
			$this->ReservationModel->putReservation($id, ($this->post)[0]);
		}
	}

?>
