
public class Client_Info {
	private String client_Name;
	private short client_Gender;
	private boolean client_Prefer_Gender;
	private boolean client_Prefer_Count;
	


	public Client_Info(String client_Name, short client_Gender, boolean client_Prefer_Gender, boolean client_Prefer_Count){
		this.client_Name = client_Name;
		this.client_Gender = client_Gender;
		this.client_Prefer_Gender = client_Prefer_Gender;
		this.client_Prefer_Count = client_Prefer_Count;
	}
	
	public String getClient_Name() {
		return client_Name;
	}

	public void setClient_Name(String client_Name) {
		this.client_Name = client_Name;
	}

	public short getClient_Gender() {
		return client_Gender;
	}

	public void setClient_Gender(short client_Gender) {
		this.client_Gender = client_Gender;
	}

	public boolean getClient_Prefer_Gender() {
		return client_Prefer_Gender;
	}

	public void setClient_Prefer_Gender(boolean client_Prefer_Gender) {
		this.client_Prefer_Gender = client_Prefer_Gender;
	}

	public boolean getClient_Prefer_Count() {
		return client_Prefer_Count;
	}

	public void setClient_Prefer_Count(boolean client_Prefer_Count) {
		this.client_Prefer_Count = client_Prefer_Count;
	}
}
