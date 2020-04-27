# removeAdjacent
Problem Solving: We has lowercase string in range ascii[‘a’..’z’]. We want to reduce the string to its shortest length by doing a series of operations. In each operation we selects a pair of adjacent lowercase letters that match, and he deletes them. For instance, the string aab could be shortened to b in one operation. The Function is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print Empty String Function Description It should return Reduced string or Empty String if the final string is empty. The function has the following parameter(s): ● s: a string to reduce Input Format A single string, s. Constraints ● 1 &lt;= |s| &lt;= 100 Output Format If the final string is empty, print Empty String; otherwise, print the final non-reducible string. Sample Input 0: aaabccddd Sample Output 0: abd Explanation 0: Performing the following sequence of operations to get the final string: aaabccddd → abccddd → abddd → abd Sample Input 1: aa Sample Output 1: Empty String Explanation 1: aa → Empty String Sample Input 2: baab Sample Output 2: Empty String Explanation 2: baab → bb → Empty String
