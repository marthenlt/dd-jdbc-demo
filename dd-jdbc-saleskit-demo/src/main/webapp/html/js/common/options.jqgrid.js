$.extend($.jgrid.defaults, { 
	height:height + 'px',
	width:width,
	pager: '#pager',
    rowNum:200,
    sortable: true,
    sortorder: "desc",
    pgbuttons: false,
   	pgtext: false,
   	pginput:false,
    loadonce:true,
    scroll:1,
    rownumbers: true,
    viewrecords: true,
    hidegrid: true,
    subGridOptions: {"plusicon" : "ui-icon-triangle-1-e", "minusicon" : "ui-icon-triangle-1-s","openicon" : "ui-icon-arrowreturn-1-e"}
});