ALGORITHM Main
VAR
    set1 : ARRAY[1..4] OF INTEGER := [3, 1, 7, 9]
    set2 : ARRAY[1..5] OF INTEGER := [2, 4, 1, 9, 3]
    i, j : INTEGER
    found : BOOLEAN
    sum : INTEGER := 0

    // For dot product
    v1, v2 : ARRAY[1..3] OF REAL
    ps : REAL

BEGIN
    // ===== Problem 1: Sum of Distinct Elements =====

    FOR i FROM 1 TO LENGTH(set1) DO
        found := FALSE
        FOR j FROM 1 TO LENGTH(set2) DO
            IF set1[i] = set2[j] THEN
                found := TRUE
                BREAK
            END_IF
        END_FOR
        IF NOT found THEN
            sum := sum + set1[i]
        END_IF
    END_FOR

    FOR i FROM 1 TO LENGTH(set2) DO
        found := FALSE
        FOR j FROM 1 TO LENGTH(set1) DO
            IF set2[i] = set1[j] THEN
                found := TRUE
                BREAK
            END_IF
        END_FOR
        IF NOT found THEN
            sum := sum + set2[i]
        END_IF
    END_FOR

    WRITE("Sum of distinct elements: ", sum)


    // ===== Problem 2A: Dot Product Using PROCEDURE =====

    v1 := [1, 2, -1]
    v2 := [2, -1, 0]
    CALL dot_product_proc(v1, v2, ps)

    IF ps = 0 THEN
        WRITE("Vectors v1 and v2 are orthogonal (procedure method).")
    ELSE
        WRITE("Vectors v1 and v2 are NOT orthogonal (procedure method).")
    END_IF


    // ===== Problem 2B: Dot Product Using FUNCTION =====

    ps := dot_product_func(v1, v2)

    IF ps = 0 THEN
        WRITE("Vectors v1 and v2 are orthogonal (function method).")
    ELSE
        WRITE("Vectors v1 and v2 are NOT orthogonal (function method).")
    END_IF
END


// --------- Procedure to calculate dot product ---------
PROCEDURE dot_product_proc(v1 : ARRAY OF REAL, v2 : ARRAY OF REAL, ps : OUT REAL)
VAR
    i : INTEGER
BEGIN
    ps := 0
    FOR i FROM 1 TO LENGTH(v1) DO
        ps := ps + (v1[i] * v2[i])
    END_FOR
END

// --------- Function to calculate dot product ---------
FUNCTION dot_product_func(v1 : ARRAY OF REAL, v2 : ARRAY OF REAL) RETURNS REAL
VAR
    i : INTEGER
    ps : REAL := 0
BEGIN
    FOR i FROM 1 TO LENGTH(v1) DO
        ps := ps + (v1[i] * v2[i])
    END_FOR
    RETURN ps
END
