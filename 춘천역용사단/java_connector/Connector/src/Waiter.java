
public class Waiter {
	private Client_Info client;
	private short waiter_Prefer_Gender;
	private short waiter_Prefer_Count;
	
	public Waiter(Client_Info client, short waiter_Prefer_Gender, short waiter_Prefer_Count) {
		this.client = client;
		this.waiter_Prefer_Count = waiter_Prefer_Count;
		this.waiter_Prefer_Gender = waiter_Prefer_Gender;
	}

	public short getWaiter_Prefer_Gender() {
		return waiter_Prefer_Gender;
	}

	public short getWaiter_Prefer_Count() {
		return waiter_Prefer_Count;
	}

}
