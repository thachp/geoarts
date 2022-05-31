import { Graphics, Stage } from "@inlet/react-pixi";
import { useCallback } from "react";

export const ArtworkMain = () => {
    const draw = useCallback((g: any) => {
        g.clear();
        g.beginFill(0xff3300);
        g.lineStyle(4, 0xffd900, 1);
        g.moveTo(50, 50);
        g.lineTo(250, 50);
        g.lineTo(100, 100);
        g.lineTo(50, 50);
        g.endFill();
        g.lineStyle(2, 0x0000ff, 1);
        g.beginFill(0xff700b, 1);
        g.drawRect(50, 150, 120, 120);
        g.lineStyle(2, 0xff00ff, 1);
        g.beginFill(0xff00bb, 0.25);
        g.drawRoundedRect(150, 100, 300, 100, 15);
        g.endFill();
        g.lineStyle(0);
        g.beginFill(0xffff0b, 0.5);
        g.drawCircle(470, 90, 60);
        g.endFill();
    }, []);

    return (
        <div className="bg-gray-200 rounded-md mb-4">
            <div className="p-4">
                <div className="space-y-6 flex justify-center">
                    <Stage width={600} height={600} options={{ backgroundColor: 0xffffff }}>
                        <Graphics draw={draw} />
                    </Stage>
                </div>
            </div>
        </div>
    );
};
