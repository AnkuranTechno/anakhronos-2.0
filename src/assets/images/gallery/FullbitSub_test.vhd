--------------------------------------------------------------------------------
-- Company: 
-- Engineer:
--
-- Create Date:   18:47:13 03/04/2023
-- Design Name:   
-- Module Name:   C:/Users/Hp/OneDrive/Documents/asif/fourbitsub/fbs_test.vhd
-- Project Name:  fourbitsub
-- Target Device:  
-- Tool versions:  
-- Description:   
-- 
-- VHDL Test Bench Created by ISE for module: bitsub_rtl
-- 
-- Dependencies:
-- 
-- Revision:
-- Revision 0.01 - File Created
-- Additional Comments:
--
-- Notes: 
-- This testbench has been automatically generated using types std_logic and
-- std_logic_vector for the ports of the unit under test.  Xilinx recommends
-- that these types always be used for the top-level I/O of a design in order
-- to guarantee that the testbench will bind correctly to the post-implementation 
-- simulation model.
--------------------------------------------------------------------------------
LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
 
-- Uncomment the following library declaration if using
-- arithmetic functions with Signed or Unsigned values
--USE ieee.numeric_std.ALL;
 
ENTITY fbs_test IS
END fbs_test;
 
ARCHITECTURE behavior OF fbs_test IS 
 
    -- Component Declaration for the Unit Under Test (UUT)
 
    COMPONENT bitsub_rtl
    PORT(
         A : IN  std_logic_vector(3 downto 0);
         B : IN  std_logic_vector(3 downto 0);
         Cin : IN  std_logic;
         Diff : OUT  std_logic_vector(3 downto 0);
         Borrow : OUT  std_logic
        );
    END COMPONENT;
    

   --Inputs
   signal A : std_logic_vector(3 downto 0) := (others => '0');
   signal B : std_logic_vector(3 downto 0) := (others => '0');
   signal Cin : std_logic := '0';

 	--Outputs
   signal Diff : std_logic_vector(3 downto 0);
   signal Borrow : std_logic;
   -- No clocks detected in port list. Replace <clock> below with 
   -- appropriate port name 
 
 
BEGIN
 
	-- Instantiate the Unit Under Test (UUT)
   uut: bitsub_rtl PORT MAP (
          A => A,
          B => B,
          Cin => Cin,
          Diff => Diff,
          Borrow => Borrow
        );


   -- Stimulus process
   stim_proc: process
   begin		
     A<="0101";
	  B<="0011";
	  Cin<='0';
	  wait for 1 ps;
	   A<="0111";
	  B<="0011";
	  Cin<='1';
	  wait for 1 ps;
	   A<="0101";
	  B<="0010";
	  Cin<='0';
	  wait for 1 ps;
	   A<="1100";
	  B<="0011";
	  Cin<='0';
	  wait for 1 ps;
   end process;

END;
