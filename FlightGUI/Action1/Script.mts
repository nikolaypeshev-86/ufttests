'SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe" @@ hightlight id_;_66108_;_script infofile_;_ZIP::ssf1.xml_;_
SystemUtil.Run "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_2073117472_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "637752afd337ab855f9e" @@ hightlight id_;_2073118816_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2073120448_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select DataTable("fromCity", dtGlobalSheet) @@ hightlight id_;_2073120976_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select DataTable("toCity", dtGlobalSheet) @@ hightlight id_;_2056800504_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfImage("WpfImage").Click 17,0 @@ hightlight id_;_2052236544_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("Mo").SetDate "20-Nov-2023" @@ hightlight id_;_2052236304_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business" @@ hightlight id_;_2052237168_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_2076179296_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "1" @@ hightlight id_;_2076179296_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2056412056_;_script infofile_;_ZIP::ssf18.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,1 @@ hightlight id_;_2076179728_;_script infofile_;_ZIP::ssf19.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2052174624_;_script infofile_;_ZIP::ssf20.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "John" @@ hightlight id_;_2073119296_;_script infofile_;_ZIP::ssf21.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_2062929920_;_script infofile_;_ZIP::ssf22.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click @@ hightlight id_;_2073120544_;_script infofile_;_ZIP::ssf23.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_461646_;_script infofile_;_ZIP::ssf24.xml_;_
