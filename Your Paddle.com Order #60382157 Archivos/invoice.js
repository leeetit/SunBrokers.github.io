$(function(){$('#invoice_country_code').select2({width:'100%',minimumResultsForSearch:-1});var dialog=$("#customer-information-modal");function centerModal(){dialog.dialog("option","position","center");}
function showFormBasedOnBusinessPurchase(){var isBusinessPurchaseCheckbox=dialog.find('[name="invoice_business_purchase"]');var isBusinessPurchase=isBusinessPurchaseCheckbox.is(':checked');dialog.find('.non-business-info').toggle(!isBusinessPurchase);dialog.find('.business-info').toggle(isBusinessPurchase);}
showFormBasedOnBusinessPurchase();function showBusinessPurchaseBasedOnCountry(){if($('#invoice_country_code option:selected').data('is-vat-registered').trim()==="0"){dialog.find('.business-purchase').toggle(false);}else{dialog.find('.business-purchase').toggle(true);}}
showBusinessPurchaseBasedOnCountry();dialog.dialog({autoOpen:dialog.data('has-errors'),height:'auto',width:'auto',minWidth:500,modal:true,resizable:false,draggable:false,title:'Edit receipt information',closeText:'',open:centerModal});$(window).resize(centerModal);dialog.find('[name="invoice_business_purchase"]').on('change',function(){showFormBasedOnBusinessPurchase();centerModal();});$('#add-edit-address').on('click',function(event){dialog.dialog('open');event.preventDefault();return false;});$('.cancel-address').on('click',function(event){dialog.dialog('close');event.preventDefault();return false;});$('#invoice_country_code').on('change',function(){var isBusinessPurchaseCheckbox=dialog.find('[name="invoice_business_purchase"]');if($('#invoice_country_code option:selected').data('is-vat-registered').trim()==="0"){isBusinessPurchaseCheckbox.attr('disabled','disabled').removeAttr('checked');}else{isBusinessPurchaseCheckbox.removeAttr('disabled');}
showBusinessPurchaseBasedOnCountry();showFormBasedOnBusinessPurchase();centerModal();});});