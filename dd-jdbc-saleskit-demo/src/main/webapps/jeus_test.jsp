<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<%@ page import="javax.sql.*" %>
<%@ page import="javax.naming.*" %>
<%
	Connection con=null;
	Statement st=null;
	ResultSet rs=null;

try
{
	InitialContext ctx = new InitialContext();

	DataSource ds = (DataSource)ctx.lookup("KRAS_TYPE5");
	con=ds.getConnection();
	st=con.createStatement();
	rs=st.executeQuery("select c01 from scott.tmp_demo where rownum<=1000");

	while(rs.next())
	{
		out.println("c01 :" + rs.getString(1)+"<br>");
	}
	
	System.out.println(con.toString());
	

} catch(Exception e) {
	out.println("Error:" + e.getMessage());
	e.printStackTrace();
} finally {
	if(rs!=null) {
		rs.close();
	}

	if(st!=null) {
		st.close();
	}

	if(con!=null) {
		con.close();
	}
}
%>
