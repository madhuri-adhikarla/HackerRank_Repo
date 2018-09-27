import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the arrayManipulation function below.
     static long arrayManipulation(int n, int[][] queries, int m) {
        long result = 0;
        long[] temp  = new long[n];
        
        for(int i = 0; i < m; i++) {
            int lowerBound = queries[i][0];
            int upperBound = queries[i][1];
            int value = queries[i][2];
        
            
            
           /* for(int j=lowerBound-1 ; j<=upperBound-1 ; j++){
                temp[j] = temp[j] + value;
            } 
            
            for(int i=0;i<n;i++){
             if(temp[i]>result){
                 result = temp[i] ;
             }
         }
         
         */
            
            temp[lowerBound-1]=temp[lowerBound-1]+ value;
             if(upperBound<n) temp[upperBound]-=value; 
        }
         
         long sum=0;

        for(int i=0;i<n;i++){
            sum+= temp[i];
            if(sum > result) 
                result = sum;
        }
         
         
         return result;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String[] nm = scanner.nextLine().split(" ");

        int n = Integer.parseInt(nm[0]);

        int m = Integer.parseInt(nm[1]);

        int[][] queries = new int[m][3];

        for (int i = 0; i < m; i++) {
            String[] queriesRowItems = scanner.nextLine().split(" ");
            scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

            for (int j = 0; j < 3; j++) {
                int queriesItem = Integer.parseInt(queriesRowItems[j]);
                queries[i][j] = queriesItem;
            }
        }

        long result = arrayManipulation(n, queries , m);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();
        scanner.close();
    }
}
