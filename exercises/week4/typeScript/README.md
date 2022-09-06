### TypeScript Cheat Sheet


// Installing - one time globally (or without the -g inside the specific project)
npm install -g typescript

//one time when starting a project
tsc --init

//for every change you want to run, build:
tsc --build

//let the ide compile our changes on the fly
tsc --watch



//flow:
1. Install (one time)
2. Tell the project that we have typescript in it.
3. Make sure to use the correct path to your built JS file, inside the html.


//config the ts:
in "tsconfig.json", we can change the outdir and more stuff like:
"rootDir": "./src"	   //for best practice, put all source files in a directory created by YOU than change this property.
"outDir": "./build" 	//for best practice put all js files inside a build folder (created for you)