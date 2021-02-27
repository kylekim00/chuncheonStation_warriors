import java.sql.*;
import java.util.Properties;

public class Waiting_Example {
	public static void main(String[] args) {

		String url = "jdbc:postgresql://localhost/testdb1";
		Properties props = new Properties();
		props.setProperty("user","gimhong-gwon");
		props.setProperty("password","khk1592");
		try {
			Connection conn = DriverManager.getConnection(url, props);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery("select * from client_info");
			System.out.println("column 1 returned");
			while (rs.next()) {
				System.out.println(rs.getString(1)+" "+ rs.getString(2));
			}
			rs.close();
			st.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
    }
}
