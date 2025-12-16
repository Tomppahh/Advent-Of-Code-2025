#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void rotateLock(char filename[30], int startingPosition);

int main(){
    char fileName[30] = "data.txt";
    int startingPosition = 50;
    rotateLock(fileName, startingPosition);
    return 0;
};

int spinWheel(int turnAmount, int startingPosition){
    int currentPosition = (startingPosition + turnAmount) % 100;
    if (currentPosition < 0){
        currentPosition += 100;
    }
    return currentPosition;
}

void rotateLock(char filename[30], int startingPosition){
    FILE* file = fopen(filename, "r");
    char line[256];
    int turnAmount;
    int zeroCount = 0;
    printf("Starting Position at very start: %d\n", startingPosition);
    while (fgets(line, sizeof(line), file)){
        if (line[0] == 'L'){
            // miinustetaan (vastapäivään)
            turnAmount = -atoi(&line[1]);
            startingPosition = spinWheel(turnAmount, startingPosition);   
        } else {
            // plussataan (myötäpäivään)
            turnAmount = atoi(&line[1]);
            startingPosition = spinWheel(turnAmount, startingPosition);  
        }
        printf("Current Position: %d, Turnamount: %d\n", startingPosition, turnAmount);
        if (startingPosition == 0){
            zeroCount++;
        }
    };
    fclose(file);
    printf("Final lock position: %d\n", startingPosition);
    printf("Password is: %d\n", zeroCount);
};


