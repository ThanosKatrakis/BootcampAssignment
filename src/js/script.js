			Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("\t- - - Cars - - -");
            Console.ForegroundColor = ConsoleColor.White;
            string[] cars = new string[4] { "Volvo", "BMW", "Ford", "Mazda" };
            for (int i = 0; i < cars.Length; i++)
            {
                Console.WriteLine(cars[i]);
            }

            Console.WriteLine("~~~ Reversed cars ~~~");

            for (int i = 0; i < cars.Length; i++)
            {
                Array.Reverse(cars);
                Console.WriteLine(cars[i]);
            }

            Console.WriteLine();
            Console.WriteLine();
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("\t- - - Integers - - -");
            Console.ForegroundColor = ConsoleColor.White;
            List<int> intr = new List<int>() { 1, 1, 2 };
            foreach (var item in intr)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("~~~ Reversed inetegers ~~~");

            intr.Reverse();
            foreach (var item in intr)
            {
                Console.WriteLine(item);
            }


            Console.ReadKey();