Curso avanzado de type script basado en el curso de platzi https://platzi.com/cursos/typescript-tipos-avanzados/

1. se crea .gitignore y .editorconfig

2. para crear el gitignore vamos a la pagina gitignore.io https://www.toptal.com/developers/gitignore/

3. en esta pagina se especifican los sistemas operativos y ademas node

windows linux macOS node

se copia el resultado y se pega en .gitignore

4. se copia el siguiente codigo en .editorconfig

# Editor configuration , see https://editorconfig.org
root = true
[ * ]
charset = utf - 8
indent_style
indent_size = 2
            = space
insert_final_newline = true
trim_trailing_whitespace = true
[ * .ts ]
quote_type = single
[ * .md ]
max_line_length = off
trim_trailing_whitespace = false

recordar que se debe instalar la extension editor config for vs para que funcione. La idea es que todo usuario tenga el mismo formato de codigo

5. inicializar el proyecto

git init -y

npm init


6. instalar localmente typescript

npm i typescript --save-dev

Si quieres ver que version de TS esta intalada, poner

npx tsc --version

7. inicializar el archivo config de TS, esto nos crea automaticamente un archivo tsconfig.json

npx tsc --init

8. se configura manualmente el archivo tsconfig.json para especificar donde guardamos los archivos ts y donde se van a guardar los archivos js compilados

 "outDir": "./dist",


9. Como probar si funciona la transpilacion

npx tsc

9. como hacer que el transpilador de TS este pendiente y cambie automaticamente 

npx tsc --watch

10. instalar una nueva libreria llamda ts-node para ejecutar TS directamente en node sin necesidad de transpilar primero 

Es mas recomendable para backend que para frontend

https://typestrong.org/ts-node/

instalar ts-node

npm install -D typescript

el -D es lo mismo que --save-dev

para ejecutar un archivo TS directamente en la consola:

npx ts-node src/demo.ts