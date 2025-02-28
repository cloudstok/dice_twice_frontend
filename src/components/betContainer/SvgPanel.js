import * as React from "react";
const SVGComponent = (props) => (
    <svg id="svg" width={344} height={400} {...props}>
        <defs>
            <filter id="Sm7n8rg5o6f" filterUnits="userSpaceOnUse">
                <feGaussianBlur in="SourceAlpha" stdDeviation={5} />
                <feOffset dx={0} dy={0} result="offsetblur" />
                <feFlood floodColor="rgba(255,255,255,0.18)" />
                <feComposite in2="offsetblur" operator="in" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope={1} />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={1}
                id="linearGradientSm7n8rg5o6h"
            >
                <stop offset="0%" stopColor="#353a40" />
                <stop offset="100%" stopColor="#121416" />
            </linearGradient>
            <linearGradient
                x1={1}
                y1={1}
                x2={0}
                y2={0}
                id="linearGradientSm7n8rg5o6u"
            >
                <stop offset="0%" stopColor="#674ffd" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#41d89f" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={1}
                id="linearGradientSm7n8rg5o6y"
            >
                <stop offset="0%" stopColor="#42e297" />
                <stop offset="100%" stopColor="#3cb9b4" />
            </linearGradient>
            <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={1}
                id="linearGradientSm7n8rg5o70"
            >
                <stop offset="0%" stopColor="#4528fb" />
                <stop offset="100%" stopColor="#9e8eff" />
            </linearGradient>
            <filter id="Sm7n8rg5o73" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation={3} />
            </filter>
            <filter id="Sm7n8rg5o77" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation={4} />
            </filter>
            <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={1}
                id="linearGradientSm7n8rg5o7c"
            >
                <stop offset="0%" stopColor="#353a40" />
                <stop offset="100%" stopColor="#121416" />
            </linearGradient>
            <mask id="maskSm7n8rg5o7e">
                <path
                    d="M 171.99999999999997 53.47999999999999 A 146.52 146.52 0 0 0 172 346.52 L 172 200 L 171.99999999999997 53.47999999999999"
                    fill="#ffffff"
                    stroke="#000000"
                    style={{
                        strokeWidth: 6.88,
                    }}
                />
            </mask>
            <filter id="Sm7n8rg5o7i" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation={3} />
            </filter>
            <filter id="Sm7n8rg5o7m" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation={4} />
            </filter>
            <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={1}
                id="linearGradientSm7n8rg5o7r"
            >
                <stop offset="0%" stopColor="#353a40" />
                <stop offset="100%" stopColor="#121416" />
            </linearGradient>
            <mask id="maskSm7n8rg5o7t">
                <path
                    d="M 172.00000000000006 346.52 A 146.52 146.52 0 0 0 171.99999999999997 53.47999999999999 L 172 200 L 172.00000000000006 346.52"
                    fill="#ffffff"
                    stroke="#000000"
                    style={{
                        strokeWidth: 6.88,
                    }}
                />
            </mask>
            <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={1}
                id="linearGradientSm7n8rg5o7w"
            >
                <stop offset="0%" stopColor="#32343a" />
                <stop offset="100%" stopColor="#26292e" />
            </linearGradient>
            <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={1}
                id="linearGradientSm7n8rg5o80"
            >
                <stop offset="0%" stopColor="none" />
                <stop offset="100%" stopColor="#383a41" stopOpacity={0.5} />
            </linearGradient>
            <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={1}
                id="linearGradientSm7n8rg5o84"
            >
                <stop offset="0%" stopColor="#f38481" />
                <stop offset="100%" stopColor="#fcdf8a" />
            </linearGradient>
            <filter id="Sm7n8rg5o86" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation={2.5} />
            </filter>
            <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={1}
                id="linearGradientSm7n8rg5o8b"
            >
                <stop offset="0%" stopColor="#f38481" />
                <stop offset="100%" stopColor="#fcdf8a" />
            </linearGradient>
            <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={1}
                id="linearGradientSm7n8rg5o8d"
            >
                <stop offset="0%" stopColor="#b3b3b3" stopOpacity={0.44} />
                <stop offset="100%" stopColor="#000000" stopOpacity={0.85} />
            </linearGradient>
        </defs>
        <circle
            cx={172}
            cy={200}
            r={162}
            id="svg-bg"
            fill="url('#linearGradientSm7n8rg5o6h')"
            filter="url('#Sm7n8rg5o6f')"
            style={{
                strokeWidth: 0,
            }}
        />
        <circle
            cx={172}
            cy={200}
            r={155.52}
            fill="rgba(0,0,0,0)"
            stroke="url('#linearGradientSm7n8rg5o6u')"
            style={{
                strokeWidth: 1,
            }}
        />
        <path
            d="M 171.99999999999997 53.47999999999999 A 146.52 146.52 0 0 0 172 346.52 L 172 200 L 171.99999999999997 53.47999999999999"
            id="shadow-0"
            fill="rgba(0,0,0,0)"
            filter="url('#Sm7n8rg5o73')"
            style={{
                strokeWidth: 0,
            }}
        />
        <path
            d="M 171.99999999999997 53.47999999999999 A 146.52 146.52 0 0 0 172 346.52 L 172 200 L 171.99999999999997 53.47999999999999"
            id="sector-glow-0"
            fill="#42e297"
            filter="url('#Sm7n8rg5o77')"
            transform="matrix(0.98,0,0,0.98,1.7748,4)"
            style={{
                strokeWidth: 0,
            }}
        />
        <path
            d="M 171.99999999999997 53.47999999999999 A 146.52 146.52 0 0 0 172 346.52 L 172 200 L 171.99999999999997 53.47999999999999"
            mask="url('#maskSm7n8rg5o7e')"
            id="sector-0"
            fill="url('#linearGradientSm7n8rg5o6y')"
            stroke="url('#linearGradientSm7n8rg5o7c')"
            style={{
                strokeWidth: 2,
                strokeOpacity: 0.3,
            }}
        />
        <path
            d="M 172.00000000000006 346.52 A 146.52 146.52 0 0 0 171.99999999999997 53.47999999999999 L 172 200 L 172.00000000000006 346.52"
            id="shadow-1"
            fill="rgba(0,0,0,0)"
            filter="url('#Sm7n8rg5o7i')"
            style={{
                strokeWidth: 0,
            }}
        />
        <path
            d="M 172.00000000000006 346.52 A 146.52 146.52 0 0 0 171.99999999999997 53.47999999999999 L 172 200 L 172.00000000000006 346.52"
            id="sector-glow-1"
            fill="#4528fb"
            filter="url('#Sm7n8rg5o7m')"
            transform="matrix(0.98,0,0,0.98,5.1052,4)"
            style={{
                strokeWidth: 0,
            }}
        />
        <path
            d="M 172.00000000000006 346.52 A 146.52 146.52 0 0 0 171.99999999999997 53.47999999999999 L 172 200 L 172.00000000000006 346.52"
            mask="url('#maskSm7n8rg5o7t')"
            id="sector-1"
            fill="url('#linearGradientSm7n8rg5o70')"
            stroke="url('#linearGradientSm7n8rg5o7r')"
            style={{
                strokeWidth: 2,
                strokeOpacity: 0.3,
            }}
        />
        <circle
            cx={172}
            cy={200}
            r={51.6}
            id="midBgCircle"
            fill="url('#linearGradientSm7n8rg5o7w')"
            style={{
                strokeWidth: 0,
            }}
        />
        <circle
            cx={172}
            cy={200}
            r={48.16}
            fill="rgba(0,0,0,0)"
            id="midBorderCircle"
            stroke="url('#linearGradientSm7n8rg5o80')"
            style={{
                strokeWidth: 2.752,
            }}
        />
        <path
            d="M 172, 227.52 L 172 239.52 A39.519999999999996,39.519999999999996 0 0 0 188.82679760265168, 235.7587651134571z"
            stroke="none"
            filter="url('#Sm7n8rg5o86')"
            fill="url('#linearGradientSm7n8rg5o84')"
            style={{
                fillOpacity: 0,
            }}
            className="fin"
        />
        <rect
            x={170.5}
            y={227.52}
            width={3}
            height={12}
            rx={2}
            ry={2}
            fill="url('#linearGradientSm7n8rg5o8b')"
            stroke="url('#linearGradientSm7n8rg5o8d')"
            className="indicator"
        />
        <text
            x={88.74}
            y={200}
            id="sector-text-0"
            fill="#188375"
            style={{
                fontFamily: "Gilroy",
                fontSize: 13,
                fontWeight: 800,
                textAnchor: "middle",
                dominantBaseline: "middle",
            }}
        >
            {"x1.95"}
        </text>
        <text
            x={255.26}
            y={199.99999999999997}
            id="sector-text-1"
            fill="#ad9fff"
            style={{
                fontFamily: "Gilroy",
                fontSize: 13,
                fontWeight: 800,
                textAnchor: "middle",
                dominantBaseline: "middle",
            }}
        >
            {"x1.95"}
        </text>
    </svg>
);
export default SVGComponent;
