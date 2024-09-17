Algorithm  AnalyserPhrase;

var
    phrase : string;
    i, longueur, nombreMots, nombreVoyelles : integer;
    caractere : char;
    dansMot : boolean;

function estVoyelle(c: char): boolean;
begin
    c := LowerCase(c);
    estVoyelle := (c = 'a') or (c = 'e') or (c = 'i') or (c = 'o') or (c = 'u');
end;

begin
    // Initialisation des variables
    longueur := 0;
    nombreMots := 0;
    nombreVoyelles := 0;
    dansMot := false;

    // Lire la phrase donner par l’utilisateur
    Write ('Entrez une phrase se terminant par un point : ');
    ReadLn(phrase);

    // Parcourir chaque caractère de la phrase
    for i := 1 to Length(phrase) do
    begin
        caractere := phrase[i];

        // Terminer si le caractère est un point
        if caractere = '.' then
            break;

        // Compter la longueur de la phrase
        longueur := longueur + 1;

        // Compter les voyelles
        if estVoyelle(caractere) then
            nombreVoyelles := nombreVoyelles + 1;

        // Compter les mots
        if caractere <> ' ' then
        begin
            if not dansMot then
            begin
                nombreMots := nombreMots + 1;
                dansMot := true;
            end;
        end
        else
            dansMot := false;
    end;

    // Afficher les résultats
    WriteLn('Longueur de la phrase : ', longueur);
    WriteLn('Nombre de mots : ', nombreMots);
    WriteLn('Nombre de voyelles : ', nombreVoyelles);
end.

