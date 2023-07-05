// on each radio button click
$('.radio_button_label').click(function(){
    // declare sum variable
    let sum;
    
	// if this radio button is in the Plastic_single_use group
    if($(this).prev().is('[name="Plastic_single_use"]')) {
      sum = Number($(this).prev().attr('add-value')) 
	  + (Number($('input[name="Straws"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Cups"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Bottles"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Cooler"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Stirrers"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_program"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_bins"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Waste_recycled"]:checked').attr('add-value')) || 0)
    + (Number($('input[name="Reuse_towels"]:checked').attr('add-value')) || 0);
    }
    
	// if this radio button is in the Straws group
    else if($(this).prev().is('[name="Straws"]')) {
      sum = Number($(this).prev().attr('add-value')) 
	  + (Number($('input[name="Plastic_single_use"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Cups"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Bottles"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Cooler"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Stirrers"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_program"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_bins"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Waste_recycled"]:checked').attr('add-value')) || 0)
    + (Number($('input[name="Reuse_towels"]:checked').attr('add-value')) || 0);
    }
    
	// if this radio button is in the Cups group
    else if($(this).prev().is('[name="Cups"]')) {
      sum = Number($(this).prev().attr('add-value')) 
	  + (Number($('input[name="Straws"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Plastic_single_use"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Bottles"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Cooler"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Stirrers"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_program"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_bins"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Waste_recycled"]:checked').attr('add-value')) || 0)
    + (Number($('input[name="Reuse_towels"]:checked').attr('add-value')) || 0);
    }
    
	// if this radio button is in the Bottles group
    else if($(this).prev().is('[name="Bottles"]')) {
      sum = Number($(this).prev().attr('add-value')) 
	  + (Number($('input[name="Straws"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Plastic_single_use"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Cups"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Cooler"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Stirrers"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_program"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_bins"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Waste_recycled"]:checked').attr('add-value')) || 0)
    + (Number($('input[name="Reuse_towels"]:checked').attr('add-value')) || 0);
    }
	
	// if this radio button is in the Cooler group
    else if($(this).prev().is('[name="Cooler"]')) {
      sum = Number($(this).prev().attr('add-value')) 
	  + (Number($('input[name="Straws"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Plastic_single_use"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Cups"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Bottles"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Stirrers"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_program"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_bins"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Waste_recycled"]:checked').attr('add-value')) || 0)
    + (Number($('input[name="Reuse_towels"]:checked').attr('add-value')) || 0);
    }
	
	// if this radio button is in the Stirrers group
    else if($(this).prev().is('[name="Stirrers"]')) {
      sum = Number($(this).prev().attr('add-value')) 
	  + (Number($('input[name="Straws"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Plastic_single_use"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Cups"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Bottles"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Cooler"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_program"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_bins"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Waste_recycled"]:checked').attr('add-value')) || 0)
    + (Number($('input[name="Reuse_towels"]:checked').attr('add-value')) || 0);
    }
  
  // if this radio button is in the Recycling_program group
    else if($(this).prev().is('[name="Recycling_program"]')) {
      sum = Number($(this).prev().attr('add-value')) 
	  + (Number($('input[name="Straws"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Plastic_single_use"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Cups"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Bottles"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Cooler"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Stirrers"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_bins"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Waste_recycled"]:checked').attr('add-value')) || 0)
    + (Number($('input[name="Reuse_towels"]:checked').attr('add-value')) || 0);
    }
	
	// if this radio button is in the Recycling_bins group
    else if($(this).prev().is('[name="Recycling_bins"]')) {
      sum = Number($(this).prev().attr('add-value')) 
	  + (Number($('input[name="Straws"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Plastic_single_use"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Cups"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Bottles"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Cooler"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Stirrers"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_program"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Waste_recycled"]:checked').attr('add-value')) || 0)
    + (Number($('input[name="Reuse_towels"]:checked').attr('add-value')) || 0);
    }
	
	// if this radio button is in the Waste_recycled group
    else if($(this).prev().is('[name="Waste_recycled"]')) {
      sum = Number($(this).prev().attr('add-value')) 
	  + (Number($('input[name="Straws"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Plastic_single_use"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Cups"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Bottles"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Cooler"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Stirrers"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_program"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_bins"]:checked').attr('add-value')) || 0)
    + (Number($('input[name="Reuse_towels"]:checked').attr('add-value')) || 0);
    }
    
    	// if this radio button is in the Reuse_towels group
    else if($(this).prev().is('[name="Reuse_towels"]')) {
      sum = Number($(this).prev().attr('add-value')) 
	  + (Number($('input[name="Straws"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Plastic_single_use"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Cups"]:checked').attr('add-value')) || 0) 
	  + (Number($('input[name="Bottles"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Cooler"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Stirrers"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_program"]:checked').attr('add-value')) || 0)
	  + (Number($('input[name="Recycling_bins"]:checked').attr('add-value')) || 0)
    + (Number($('input[name="Waste_recycled"]:checked').attr('add-value')) || 0);
    }



    
    // display the sum
    // NB: use sum directly if not interested in formatting
    // $('.value').text(sum);
    $('.value').text(sum);
    // add the radio button's value to the hidden input field
    $('.score').val(sum);
  });
