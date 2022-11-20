<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
  <link href="output.css" rel="stylesheet">
</head>
<body>
  <div class="flex items-center justify-center height w-full box-border">
    <!--Body-->
    <div class="bg-transparent border rounded-3xl h-96 w-80 flex flex-col mx-2">
        <!--Search Bar-->
        <div class="h-8 max-full rounded-2xl m-2 bg-gray-50 flex justify-between items-center px-6">
            <div class="font-semibold">
              <form id="form" action="">
                <input id="input" onkeydown="search(this)" rounded placeholder="Search Here" />
              </form>
            </div>
        <div id="search" class="font-semibold"><i class="fa-solid fa-magnifying-glass"></i></div>
        </div>
        <!--City Here-->
        <div class="px-6 flex items-center justify-between text-4xl mt-4 text-stroke-description">
            <h1 id="name" class="font-bold ">Manila</h1>
            <div><img src="" id="icon" alt="Clouds" class="w-20 h-auto" srcset=""></div>
        </div>
        <!--Temperature, humidity, wind speed, sunrise, sunset-->
        <div class="px-6 text-stroke-description tracking-widest font-bold">
            <div id="temp" class="text-7xl mt-4">53</div>
            <div><h2 id="description" class="mt-4 text-stroke-description-back text-2xl">Cloudy</h2></div>
            <div id="humidity" class="text-stroke-description-back">Humidity: 63</div>
            <div id="speed" class="text-stroke-description-back">WindSpeed: 4.5 km/hr</div>
            <sub class="pb-2" id="country"></sub>
        </div>

    </div>
  </div>
</body>
<script src="index.js" defer></script>
</html>
