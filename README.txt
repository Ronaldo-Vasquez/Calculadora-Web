
Estos son los comandos que he estado probando en la terminal de git bash en el sistema operativo Windos

notas para mi

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git log
commit 60bb1414573c1340f0f862e8fdd18e2e07a3c18a (HEAD, origin/main, main)
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:35:55 2023 -0500

    Acutalizacion 1.02 de diseño calculadora

commit bbc61ddfc2c1f4a3a321e68c8544df8d0fbbf20c
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:27:29 2023 -0500

    Actualizacion de los botones

commit b15dd033726e443446275074d4bb3fdde8506be4
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 17:22:16 2023 -0500

    calculadora web version 1.01

commit 44c4c95e7d4304d4b7171e97ee5e128f6792fbd7
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 21:16:29 2023 -0500

    Primera version de la calculadora web html css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git log scripts.js
commit 60bb1414573c1340f0f862e8fdd18e2e07a3c18a (HEAD, origin/main, main)
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:35:55 2023 -0500

    Acutalizacion 1.02 de diseño calculadora

commit b15dd033726e443446275074d4bb3fdde8506be4
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 17:22:16 2023 -0500

    calculadora web version 1.01

commit 44c4c95e7d4304d4b7171e97ee5e128f6792fbd7
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 21:16:29 2023 -0500

    Primera version de la calculadora web html css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout 44c4c95e7d4304d4b7171e97ee5e128f6792fbd7 60bb1414573c1340f0f862e8fdd18e2e07a3c18a
error: pathspec '60bb1414573c1340f0f862e8fdd18e2e07a3c18a' did not match any file(s) known to git

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git status
HEAD detached at 60bb141
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        scripts.js

nothing added to commit but untracked files present (use "git add" to track)

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git log scripts.js
commit 60bb1414573c1340f0f862e8fdd18e2e07a3c18a (HEAD, origin/main, main)
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:35:55 2023 -0500

    Acutalizacion 1.02 de diseño calculadora

commit b15dd033726e443446275074d4bb3fdde8506be4
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 17:22:16 2023 -0500

    calculadora web version 1.01

commit 44c4c95e7d4304d4b7171e97ee5e128f6792fbd7
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 21:16:29 2023 -0500

    Primera version de la calculadora web html css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git log
commit 60bb1414573c1340f0f862e8fdd18e2e07a3c18a (HEAD, origin/main, main)
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:35:55 2023 -0500

    Acutalizacion 1.02 de diseño calculadora

commit bbc61ddfc2c1f4a3a321e68c8544df8d0fbbf20c
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:27:29 2023 -0500

    Actualizacion de los botones

commit b15dd033726e443446275074d4bb3fdde8506be4
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 17:22:16 2023 -0500

    calculadora web version 1.01

commit 44c4c95e7d4304d4b7171e97ee5e128f6792fbd7
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 21:16:29 2023 -0500

    Primera version de la calculadora web html css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout b15dd033726e443446275074d4bb3fdde8506be4 60bb1414573c1340f0f862e8fdd18e2e07a3c18a
error: pathspec '60bb1414573c1340f0f862e8fdd18e2e07a3c18a' did not match any file(s) known to git

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git status scripts.js
HEAD detached at 60bb141
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        scripts.js

nothing added to commit but untracked files present (use "git add" to track)

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ cat scripts.js


Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ cat




Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ cat scripts.js


Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git chekout master
git: 'chekout' is not a git command. See 'git --help'.

The most similar command is
        checkout

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout master scripts.js
error: pathspec 'master' did not match any file(s) known to git
error: pathspec 'scripts.js' did not match any file(s) known to git

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git chekout master
git: 'chekout' is not a git command. See 'git --help'.

The most similar command is
        checkout

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git chekout
git: 'chekout' is not a git command. See 'git --help'.

The most similar command is
        checkout

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout master
error: pathspec 'master' did not match any file(s) known to git

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git log scripts.js
commit 60bb1414573c1340f0f862e8fdd18e2e07a3c18a (HEAD, origin/main, main)
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:35:55 2023 -0500

    Acutalizacion 1.02 de diseño calculadora

commit b15dd033726e443446275074d4bb3fdde8506be4
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 17:22:16 2023 -0500

    calculadora web version 1.01

commit 44c4c95e7d4304d4b7171e97ee5e128f6792fbd7
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 21:16:29 2023 -0500

    Primera version de la calculadora web html css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout ^C

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout 44c4c95e7d4304d4b7171e97ee5e128f6792fbd7
error: The following untracked working tree files would be overwritten by checkout:
        scripts.js
Please move or remove them before you switch branches.
Aborting

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout master
error: pathspec 'master' did not match any file(s) known to git

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout master .
error: pathspec 'master' did not match any file(s) known to git

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git log Index.html
commit bbc61ddfc2c1f4a3a321e68c8544df8d0fbbf20c
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:27:29 2023 -0500

    Actualizacion de los botones

commit b15dd033726e443446275074d4bb3fdde8506be4
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 17:22:16 2023 -0500

    calculadora web version 1.01

commit 44c4c95e7d4304d4b7171e97ee5e128f6792fbd7
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 21:16:29 2023 -0500

    Primera version de la calculadora web html css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout master Index.html
error: pathspec 'master' did not match any file(s) known to git

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout main scripts.js+
error: pathspec 'scripts.js+' did not match any file(s) known to git

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout main scripts.js
error: pathspec 'scripts.js' did not match any file(s) known to git

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout b15dd033726e443446275074d4bb3fdde8506be4 scripts.js
Updated 1 path from 78b53e8

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ code scripts.js

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout bbc61ddfc2c1f4a3a321e68c8544df8d0fbbf20c scripts.js
Updated 0 paths from dc3bd25

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ code scripts.js

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout master Index.html
error: pathspec 'master' did not match any file(s) known to git

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout main Index.html
Updated 0 paths from e83ea25

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout origin/main Index.html
Updated 0 paths from e83ea25

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout origin/main styles.css
Updated 0 paths from e83ea25

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout origin/main scripts.js
error: pathspec 'scripts.js' did not match any file(s) known to git

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git help
usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           [--super-prefix=<path>] [--config-env=<name>=<envvar>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   merge     Join two or more development histories together
   rebase    Reapply commits on top of another base tip
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git branch
* (HEAD detached at 60bb141)
  main

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git log
commit 60bb1414573c1340f0f862e8fdd18e2e07a3c18a (HEAD, origin/main, main)
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:35:55 2023 -0500

    Acutalizacion 1.02 de diseño calculadora

commit bbc61ddfc2c1f4a3a321e68c8544df8d0fbbf20c
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:27:29 2023 -0500

    Actualizacion de los botones

commit b15dd033726e443446275074d4bb3fdde8506be4
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 17:22:16 2023 -0500

    calculadora web version 1.01

commit 44c4c95e7d4304d4b7171e97ee5e128f6792fbd7
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 21:16:29 2023 -0500

    Primera version de la calculadora web html css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git pull
You are not currently on a branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>


Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git branch -l
* (HEAD detached at 60bb141)
  main

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git branch
* (HEAD detached at 60bb141)
  main

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git branch "Desarrollo de funciones"
fatal: 'Desarrollo de funciones' is not a valid branch name

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git branch "Desarrollo_Funcionalidades"

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git branch
* (HEAD detached at 60bb141)
  Desarrollo_Funcionalidades
  main

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout main
Switched to branch 'main'
A       scripts.js
Your branch is up to date with 'origin/main'.

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git log
commit 60bb1414573c1340f0f862e8fdd18e2e07a3c18a (HEAD -> main, origin/main, Desarrollo_Funcionalidades)
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:35:55 2023 -0500

    Acutalizacion 1.02 de diseño calculadora

commit bbc61ddfc2c1f4a3a321e68c8544df8d0fbbf20c
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:27:29 2023 -0500

    Actualizacion de los botones

commit b15dd033726e443446275074d4bb3fdde8506be4
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 17:22:16 2023 -0500

    calculadora web version 1.01

commit 44c4c95e7d4304d4b7171e97ee5e128f6792fbd7
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 21:16:29 2023 -0500

    Primera version de la calculadora web html css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ cat scripts.js
var operacionA;
var operacionB;
var operacion;

function init (){
    var resultado = document.getElementById("resultado");
    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var igual = document.getElementById("igual");
    var decimal = document.getElementById("decimal");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multi = document.getElementById("multi");
    var divi = document.getElementById("divi");

    cero.onclick = function(e){
        resultado.textContent = resultado.textContent +"0";
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent +"1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent +"2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent +"3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent +"4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent +"5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent +"6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent +"7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent +"8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent +"9";
    }

    borrar.onclick = function(e){
        borrar();
    }
    suma.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multi.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    divi.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operacionB = resultado.textContent;
        resolver();
    }

}

function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operacion="";
    operacionA=0;
    operacionB=0;
}
function resolver() {
    var resultado = 0;
    switch (operacion) {
        case "+":
            resultado = parseFloat(operacionA)+parseFloat(operacionB)

            break;

        default:
            break;
    }
}
Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git checkout oirigin
error: pathspec 'oirigin' did not match any file(s) known to git

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git checkout origin/main
Note: switching to 'origin/main'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at 60bb141 Acutalizacion 1.02 de diseño calculadora
A       scripts.js

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git log
commit 60bb1414573c1340f0f862e8fdd18e2e07a3c18a (HEAD, origin/main, main, Desarrollo_Funcionalidades)
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:35:55 2023 -0500

    Acutalizacion 1.02 de diseño calculadora

commit bbc61ddfc2c1f4a3a321e68c8544df8d0fbbf20c
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:27:29 2023 -0500

    Actualizacion de los botones

commit b15dd033726e443446275074d4bb3fdde8506be4
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 17:22:16 2023 -0500

    calculadora web version 1.01

commit 44c4c95e7d4304d4b7171e97ee5e128f6792fbd7
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 21:16:29 2023 -0500

    Primera version de la calculadora web html css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout main
Switched to branch 'main'
A       scripts.js
Your branch is up to date with 'origin/main'.

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git log
commit 60bb1414573c1340f0f862e8fdd18e2e07a3c18a (HEAD -> main, origin/main, Desarrollo_Funcionalidades)
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:35:55 2023 -0500

    Acutalizacion 1.02 de diseño calculadora

commit bbc61ddfc2c1f4a3a321e68c8544df8d0fbbf20c
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:27:29 2023 -0500

    Actualizacion de los botones

commit b15dd033726e443446275074d4bb3fdde8506be4
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 17:22:16 2023 -0500

    calculadora web version 1.01

commit 44c4c95e7d4304d4b7171e97ee5e128f6792fbd7
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 21:16:29 2023 -0500

    Primera version de la calculadora web html css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git branch -l
  Desarrollo_Funcionalidades
* main

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git checkout main
Already on 'main'
A       scripts.js
Your branch is up to date with 'origin/main'.

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git checkout origin/main
Note: switching to 'origin/main'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at 60bb141 Acutalizacion 1.02 de diseño calculadora
A       scripts.js

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout main
Switched to branch 'main'
A       scripts.js
Your branch is up to date with 'origin/main'.

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git checkout origin/main
Note: switching to 'origin/main'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at 60bb141 Acutalizacion 1.02 de diseño calculadora
A       scripts.js

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git branch -l
* (HEAD detached at origin/main)
  Desarrollo_Funcionalidades
  main

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git cheackout main
git: 'cheackout' is not a git command. See 'git --help'.

The most similar command is
        checkout

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web ((60bb141...))
$ git checkout main
Switched to branch 'main'
A       scripts.js
Your branch is up to date with 'origin/main'.

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git branch -l
  Desarrollo_Funcionalidades
* main

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git checkout Desarrollo_Funcionalidades
Switched to branch 'Desarrollo_Funcionalidades'
A       scripts.js

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (Desarrollo_Funcionalidades)
$ git checkout main
Switched to branch 'main'
A       scripts.js
Your branch is up to date with 'origin/main'.

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git branch -l
  Desarrollo_Funcionalidades
* main

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ cat scripts.js
var operacionA;
var operacionB;
var operacion;

function init (){
    var resultado = document.getElementById("resultado");
    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var igual = document.getElementById("igual");
    var decimal = document.getElementById("decimal");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multi = document.getElementById("multi");
    var divi = document.getElementById("divi");

    cero.onclick = function(e){
        resultado.textContent = resultado.textContent +"0";
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent +"1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent +"2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent +"3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent +"4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent +"5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent +"6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent +"7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent +"8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent +"9";
    }

    borrar.onclick = function(e){
        borrar();
    }
    suma.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multi.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    divi.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operacionB = resultado.textContent;
        resolver();
    }

}

function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operacion="";
    operacionA=0;
    operacionB=0;
}
function resolver() {
    var resultado = 0;
    switch (operacion) {
        case "+":
            resultado = parseFloat(operacionA)+parseFloat(operacionB)

            break;

        default:
            break;
    }
}
Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ code scripts.js

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git checkout
A       scripts.js
Your branch is up to date with 'origin/main'.
d
Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git checkout Desarrollo_Funcionalidades
Switched to branch 'Desarrollo_Funcionalidades'
A       scripts.js

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (Desarrollo_Funcionalidades)
$ git add .

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (Desarrollo_Funcionalidades)
$ git commit -m "Cambiando funcionalidades en botones por arreglos version ALFA"
[Desarrollo_Funcionalidades df1157f] Cambiando funcionalidades en botones por arreglos version ALFA
 1 file changed, 25 insertions(+)
 create mode 100644 scripts.js

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (Desarrollo_Funcionalidades)
$ git push
fatal: The current branch Desarrollo_Funcionalidades has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin Desarrollo_Funcionalidades

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.


Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (Desarrollo_Funcionalidades)
$ git push Desarrollo_Funcionalidades
fatal: 'Desarrollo_Funcionalidades' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (Desarrollo_Funcionalidades)
$ git push
fatal: The current branch Desarrollo_Funcionalidades has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin Desarrollo_Funcionalidades

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.


Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (Desarrollo_Funcionalidades)
$ git pushh --set-upstream origin Desarrollo_Funcionalidades
git: 'pushh' is not a git command. See 'git --help'.

The most similar command is
        push

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (Desarrollo_Funcionalidades)
$ git push --set-upstream origin Desarrollo_Funcionalidades
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 572 bytes | 286.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'Desarrollo_Funcionalidades' on GitHub by visiting:
remote:      https://github.com/Ronaldo-Vasquez/Calculadora-Web/pull/new/Desarrollo_Funcionalidades
remote:
To https://github.com/Ronaldo-Vasquez/Calculadora-Web.git
 * [new branch]      Desarrollo_Funcionalidades -> Desarrollo_Funcionalidades
branch 'Desarrollo_Funcionalidades' set up to track 'origin/Desarrollo_Funcionalidades'.

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (Desarrollo_Funcionalidades)
$ git status
On branch Desarrollo_Funcionalidades
Your branch is up to date with 'origin/Desarrollo_Funcionalidades'.

nothing to commit, working tree clean

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (Desarrollo_Funcionalidades)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git status scripts.js
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ cat scripts.js
cat: scripts.js: No such file or directory

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ ls
Index.html  styles.css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git log
commit 60bb1414573c1340f0f862e8fdd18e2e07a3c18a (HEAD -> main, origin/main)
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:35:55 2023 -0500

    Acutalizacion 1.02 de diseño calculadora

commit bbc61ddfc2c1f4a3a321e68c8544df8d0fbbf20c
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Thu Mar 9 10:27:29 2023 -0500

    Actualizacion de los botones

commit b15dd033726e443446275074d4bb3fdde8506be4
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 17:22:16 2023 -0500

    calculadora web version 1.01

commit 44c4c95e7d4304d4b7171e97ee5e128f6792fbd7
Author: RLVasquez <rlvc2112000@hotmail.com>
Date:   Mon Mar 6 21:16:29 2023 -0500

    Primera version de la calculadora web html css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git che
checkout      cherry        cherry-pick

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git reset ^C

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git reset b15dd033726e443446275074d4bb3fdde8506be4 scripts.js
Unstaged changes after reset:
D       scripts.js

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ ls
Index.html  styles.css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git checkout Desarrollo_Funcionalidades
error: Your local changes to the following files would be overwritten by checkout:
        scripts.js
Please commit your changes or stash them before you switch branches.
Aborting

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git checkout Desarrollo_Funcionalidades
error: Your local changes to the following files would be overwritten by checkout:
        scripts.js
Please commit your changes or stash them before you switch branches.
Aborting

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git checkout Desarrollo_Funcionalidades
error: Your local changes to the following files would be overwritten by checkout:
        scripts.js
Please commit your changes or stash them before you switch branches.
Aborting

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   scripts.js

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    scripts.js


Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git restore scripts.js

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ ls
Index.html  scripts.js  styles.css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ cat scripts.js
var operacionA;
var operacionB;
var operacion;

function init (){
    var resultado = document.getElementById("resultado");
    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var igual = document.getElementById("igual");
    var decimal = document.getElementById("decimal");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multi = document.getElementById("multi");
    var divi = document.getElementById("divi");

    cero.onclick = function(e){
        resultado.textContent = resultado.textContent +"0";
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent +"1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent +"2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent +"3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent +"4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent +"5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent +"6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent +"7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent +"8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent +"9";
    }

    borrar.onclick = function(e){
        borrar();
    }
    suma.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multi.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    divi.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operacionB = resultado.textContent;
        resolver();
    }

}

function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operacion="";
    operacionA=0;
    operacionB=0;
}
function resolver() {
    var resultado = 0;
    switch (operacion) {
        case "+":
            resultado = parseFloat(operacionA)+parseFloat(operacionB)

            break;

        default:
            break;
    }
}
Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git add .

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git comit -m "Prueba git ramas"
git: 'comit' is not a git command. See 'git --help'.

The most similar command is
        commit

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git commit -m "Prueba git ramas"
[main 4385549] Prueba git ramas
 1 file changed, 105 insertions(+)
 create mode 100644 scripts.js

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git push
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 836 bytes | 836.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/Ronaldo-Vasquez/Calculadora-Web.git
   60bb141..4385549  main -> main

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ cat scripts.js
var operacionA;
var operacionB;
var operacion;

function init (){
    var resultado = document.getElementById("resultado");
    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var igual = document.getElementById("igual");
    var decimal = document.getElementById("decimal");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multi = document.getElementById("multi");
    var divi = document.getElementById("divi");

    cero.onclick = function(e){
        resultado.textContent = resultado.textContent +"0";
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent +"1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent +"2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent +"3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent +"4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent +"5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent +"6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent +"7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent +"8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent +"9";
    }

    borrar.onclick = function(e){
        borrar();
    }
    suma.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multi.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    divi.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operacionB = resultado.textContent;
        resolver();
    }

}

function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operacion="";
    operacionA=0;
    operacionB=0;
}
function resolver() {
    var resultado = 0;
    switch (operacion) {
        case "+":
            resultado = parseFloat(operacionA)+parseFloat(operacionB)

            break;

        default:
            break;
    }
}
Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git checkout Desarrollo_Funcionalidades
Switched to branch 'Desarrollo_Funcionalidades'
Your branch is up to date with 'origin/Desarrollo_Funcionalidades'.

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (Desarrollo_Funcionalidades)
$ cat scripts.js
var operacionA;
var operacionB;
var operacion;

function init (){
    var resultado = document.getElementById("resultado");
    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var igual = document.getElementById("igual");
    var decimal = document.getElementById("decimal");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multi = document.getElementById("multi");
    var divi = document.getElementById("divi");


}
Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (Desarrollo_Funcionalidades)
$ git status
On branch Desarrollo_Funcionalidades
Your branch is up to date with 'origin/Desarrollo_Funcionalidades'.

nothing to commit, working tree clean

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (Desarrollo_Funcionalidades)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ cat > scripts.js



Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ cat >> scripts.js
hola


Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ code scripts.js

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ cat s
scripts.js  styles.css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ cat s
scripts.js  styles.css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ cat scripts.js

hola

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   scripts.js

no changes added to commit (use "git add" and/or "git commit -a")

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ git restore scripts.js

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ cat scripts.js
var operacionA;
var operacionB;
var operacion;

function init (){
    var resultado = document.getElementById("resultado");
    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var igual = document.getElementById("igual");
    var decimal = document.getElementById("decimal");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multi = document.getElementById("multi");
    var divi = document.getElementById("divi");

    cero.onclick = function(e){
        resultado.textContent = resultado.textContent +"0";
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent +"1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent +"2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent +"3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent +"4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent +"5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent +"6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent +"7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent +"8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent +"9";
    }

    borrar.onclick = function(e){
        borrar();
    }
    suma.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multi.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    divi.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operacionB = resultado.textContent;
        resolver();
    }

}

function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operacion="";
    operacionA=0;
    operacionB=0;
}
function resolver() {
    var resultado = 0;
    switch (operacion) {
        case "+":
            resultado = parseFloat(operacionA)+parseFloat(operacionB)

            break;

        default:
            break;
    }
}
Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ cat > README.txt

Estos son los comandos que he estado probando en la terminal de git bash en el sistema operativo Windos




Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ ls
Index.html  README.txt  scripts.js  styles.css

Romix@LAPTOP-0TKI3JOR MINGW64 ~/OneDrive/Documentos/Ejercicios de programacion/Calculadora Web (main)
$ code README.txt
