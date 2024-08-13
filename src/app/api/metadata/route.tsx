import { NextRequest } from "next/server";
import { ImageResponse } from "next/og"
export const runtime = 'edge'

export async function GET(req: NextRequest) {

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 36,
                    background: "black",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    color: "black",
                }}
            >
                <img
                    src='https://www.transmissions.wtf/script-logo.svg'
                    alt="logo"
                    width="100%"
                    height="100%"
                    style={{ objectFit: "contain", marginLeft: "100px" }}
                />
            </div>
        ),

        {
            width: 1200,
            height: 600,
        }
    );
}