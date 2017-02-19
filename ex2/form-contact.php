<div class="contact">
	<div id='message' style='display:none'>
	</div>
	<form class="LeaDNAForm" method="post" name="form1" target="_parent">  
		<input type="hidden" id="hid_ID" name="ID" value="456">
		
		
		<div class="col-xs-6 ">
			<input type="text" name="txtFirstName" title="Name" class="reqTrue"  id="txtFirstName" value="">
		</div>
		<div class="col-xs-6 ">
			<input type="text" name="txtCompany_Name" title="Company Name" class="reqTrue" id="txtCompany_Name" value="">
		</div>
		<div class="col-xs-6">
			<input type="text" name="txtEmail" title="Email"  class="reqTrue Email" id="txtEmail" value="" placeholder="Email*">
		</div>
		<div class="col-xs-6">
			<input type="text" name="txtPhone" title="Phone" class="reqTrue"  id="txtPhone" value="">
		</div>
		<div class="col-xs-12">
			<select id="cboRequesting_Info_Regarding" title="Requesting Info Regarding"  class="reqTrue" name="cboRequesting_Info_Regarding"><option value="-1">
				-- Select Requesting Info Regarding --
			</option><option value="Customers Service">Customers Service</option><option value="Technical Support">Technical Support</option><option value="Sales">Sales</option><option value="Careers">Careers</option><option value="Partnership">Partnership</option><option value="Other">Other</option></select>
		</div>
		<div class="col-xs-12">
			<input type="text" name="txtQuestions/Comments" title="Questions/Comments" class="reqTrue"  id="txtQuestions/Comments" value="" style="height:125px;">
		</div>
		<div class="col-xs-12 P0"> 
			<div class="col-xs-12 P20 text-center">
				<img src="../light.leadna.com/images/loading.gif" id="imgload" class="imgload" style="display: none; vertical-align: middle;padding-right:10px">
				<button type="button"  class=" btn-primary btn btnclass text-center" name="btn1" id="btn1" value="Submit">Submit</button>
			</div>
		</div>
		
	</form>
</div>
