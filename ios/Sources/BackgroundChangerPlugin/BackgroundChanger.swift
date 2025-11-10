import Foundation

@objc public class BackgroundChanger: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
