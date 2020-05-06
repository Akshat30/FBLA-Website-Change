import java.io.*;
import java.util.*;

public class ArrayConversion {
	public static HashMap<Integer, String> getConf() throws IOException {
		BufferedReader buff = new BufferedReader(new FileReader("conferences.txt"));
		HashMap<Integer, String> ret = new HashMap<Integer, String>();
		for (int i = 0; i < 3; i++) {
			String[] line = buff.readLine().split("@");
			ret.put(Integer.parseInt(line[1]), line[2]);
		}

		return ret;
	}

	public static HashMap<Integer, String> getCompetitors() throws IOException {
		BufferedReader buff = new BufferedReader(new FileReader("competitors.txt"));
		HashMap<Integer, String> ret = new HashMap<Integer, String>();
		for (int i = 0; i < 1059; i++) {
			String[] line = buff.readLine().split("@");
			ret.put(Integer.parseInt(line[1]), line[2] + " " + line[3]);
		}
		return ret;
	}

	public static HashMap<Integer, String> getEvents() throws IOException {
		BufferedReader buff = new BufferedReader(new FileReader("events.txt"));
		HashMap<Integer, String> ret = new HashMap<Integer, String>();
		for (int i = 0; i < 115; i++) {
			String[] line = buff.readLine().split("@");
			ret.put(Integer.parseInt(line[4]), line[1]);
		}
		return ret;
	}

	public static String[][] getResults() throws IOException {
		BufferedReader buff = new BufferedReader(new FileReader("results.txt"));
		String[][] ret = new String[3833][9];
		for (int i = 0; i < 3833; i++) {
			String[] line = buff.readLine().split("@");
			for (int k = 1; k <= 9; k++) {
				ret[i][k - 1] = line[k];
			}
		}
		return ret;
	}

	// person, event, conference, year, place

	public static void main(String[] args) throws IOException {
		HashMap<Integer, String> conferences = getConf();
		HashMap<Integer, String> competitors = getCompetitors();
		HashMap<Integer, String> events = getEvents();
		String[][] master = getResults();
		PrintWriter out = new PrintWriter("results.out");

		System.out.println(master.length);

		for (int i = 0; i < master.length; i++) {
			String[] line = master[i];
			String returnString = "[";
			for (int k = 0; k < 5; k++) {
				if (!line[k].equals("0")) {
					returnString = returnString + "\"" + competitors.get(Integer.parseInt(line[k])) + "\"" + ",";
				}
			}
			returnString = returnString + "\"" + events.get(Integer.parseInt(line[5])) + "\"" + ",";
			returnString = returnString + "\"" + conferences.get(Integer.parseInt(line[6])) + "\"" + ",";
			returnString = returnString + line[7] + ",";
			returnString = returnString + line[8] + "],";
			out.println(returnString);
		}

		out.close();

	}
}
