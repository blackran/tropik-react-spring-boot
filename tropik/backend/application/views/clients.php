<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>LE TROPIK</title>
	</head>
	<body>
		<style media="screen">
			form{
				margin: 2% 30%;
			}
			input{
				height: 30px;
				width: 100%;
				margin-top: 10px;
				padding-left: 5px;
			}
		</style>
		<form class="clients" action="ClientsController" method="post">
			<input type="text" placeholder="NomClient" name="NomClient"/>
			<input type="text" placeholder="AddressClient" name="AddressClient"/>
			<input type="text" placeholder="CpClient" name="CpClient"/>
			<input type="text" placeholder="PaysClient" name="PaysClient"/>
			<input type="text" placeholder="TelClient" name="TelClient"/>
			<input type="text" placeholder="EmailClient" name="EmailClient"/>
			<input type="text" placeholder="AnneeCreClient" name="AnneeCreClient"/>
			<input type="submit" value="Enregistre"/>
		</form>
	</body>
</html>
