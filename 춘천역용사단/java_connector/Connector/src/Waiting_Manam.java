import java.sql.*;
import java.util.Properties;
public class Waiting_Manam {
	public void create(String name, boolean gender, boolean prefer_gender, boolean prefer_count ) {
		String url = "jdbc:postgresql://localhost/testdb1";
		Properties props = new Properties();
		props.setProperty("user","gimhong-gwon");
		props.setProperty("password","khk1592");
		try {
			Connection conn = DriverManager.getConnection(url, props);
			int foovalue = 500;
			PreparedStatement st = conn.prepareStatement("DELETE FROM mytable WHERE columnfoo = ?");
			st.setInt(1, foovalue);
			int rowsDeleted = st.executeUpdate();//insert, update, delete. doesn't return a Result Set.
			System.out.println(rowsDeleted + " rows deleted");
			st.close();
			
//			Statement st = conn.createStatement();
//			st.execute("DROP TABLE mytable");  //create, modify drop table, view
//			st.close();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public static void main(String[] args) {
		
		
		
		
    }
}
